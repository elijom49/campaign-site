import bcrypt from 'bcryptjs';
import { storage } from './storage';
import type { Request, Response, NextFunction } from 'express';

export interface AdminRequest extends Request {
  admin?: {
    id: number;
    email: string;
    role: string;
  };
}

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

export async function createInitialAdmin(email: string, password: string, role: 'owner' | 'admin' = 'owner') {
  const hashedPassword = await hashPassword(password);
  return await storage.createAdmin({
    email,
    password: hashedPassword,
    role
  });
}

export const requireAdminAuth = async (req: AdminRequest, res: Response, next: NextFunction) => {
  const session = req.session as any;
  const sessionAdmin = session?.admin;
  
  if (!sessionAdmin) {
    return res.status(401).json({ message: 'Admin authentication required' });
  }

  // Verify admin still exists and is active
  const admin = await storage.getAdminByEmail(sessionAdmin.email);
  if (!admin || !admin.isActive) {
    delete session.admin;
    return res.status(401).json({ message: 'Admin authentication invalid' });
  }

  req.admin = {
    id: admin.id,
    email: admin.email,
    role: admin.role
  };

  next();
};

export const requireOwnerAuth = async (req: AdminRequest, res: Response, next: NextFunction) => {
  await requireAdminAuth(req, res, () => {
    if (req.admin?.role !== 'owner') {
      return res.status(403).json({ message: 'Owner access required' });
    }
    next();
  });
};
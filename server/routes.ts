import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { requireAdminAuth, requireOwnerAuth, verifyPassword, createInitialAdmin, type AdminRequest } from "./adminAuth";
import { insertAdminUserSchema, insertEditableContentSchema } from "@shared/schema";
import { seedDatabase, createAdminUser } from "./seedContent";
import { google } from 'googleapis';

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin system initialization (development only)
  app.post("/api/admin/init", async (req, res) => {
    try {
      const { ownerEmail, ownerPassword } = req.body;
      
      if (!ownerEmail || !ownerPassword) {
        return res.status(400).json({ message: "Owner email and password required" });
      }

      // Seed database with initial content
      await seedDatabase();
      
      // Create owner admin user
      const admin = await createAdminUser(ownerEmail, ownerPassword, 'owner');
      
      res.json({
        message: "Admin system initialized successfully",
        admin: {
          id: admin.id,
          email: admin.email,
          role: admin.role
        }
      });
    } catch (error) {
      console.error("Init error:", error);
      res.status(500).json({ message: "Failed to initialize admin system" });
    }
  });

  // Admin authentication routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password required" });
      }

      const admin = await storage.getAdminByEmail(email);
      if (!admin || !admin.isActive) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const isValidPassword = await verifyPassword(password, admin.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Store admin in session
      (req.session as any).admin = {
        id: admin.id,
        email: admin.email,
        role: admin.role
      };

      res.json({
        id: admin.id,
        email: admin.email,
        role: admin.role
      });
    } catch (error) {
      console.error("Admin login error:", error);
      res.status(500).json({ message: "Login failed" });
    }
  });

  app.post("/api/admin/logout", (req, res) => {
    delete (req.session as any).admin;
    res.json({ message: "Logged out successfully" });
  });

  app.get("/api/admin/me", requireAdminAuth, (req: AdminRequest, res) => {
    res.json(req.admin);
  });

  // Admin user management (owner only)
  app.post("/api/admin/users", requireOwnerAuth, async (req: AdminRequest, res) => {
    try {
      const result = insertAdminUserSchema.parse(req.body);
      const admin = await createInitialAdmin(result.email, result.password, result.role as 'owner' | 'admin');
      
      res.json({
        id: admin.id,
        email: admin.email,
        role: admin.role,
        isActive: admin.isActive
      });
    } catch (error) {
      console.error("Create admin error:", error);
      res.status(400).json({ message: "Failed to create admin user" });
    }
  });

  // Content management routes
  app.get("/api/admin/content", requireAdminAuth, async (req, res) => {
    try {
      const content = await storage.getEditableContent();
      res.json(content);
    } catch (error) {
      console.error("Get content error:", error);
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });

  app.post("/api/admin/content", requireAdminAuth, async (req: AdminRequest, res) => {
    try {
      const result = insertEditableContentSchema.parse(req.body);
      const content = await storage.createContent(result);
      res.json(content);
    } catch (error) {
      console.error("Create content error:", error);
      res.status(400).json({ message: "Failed to create content" });
    }
  });

  app.put("/api/admin/content/:id", requireAdminAuth, async (req: AdminRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const { contentValue } = req.body;
      
      if (!contentValue || !req.admin) {
        return res.status(400).json({ message: "Content value required" });
      }

      const content = await storage.updateContent(id, contentValue, req.admin.id);
      res.json(content);
    } catch (error) {
      console.error("Update content error:", error);
      res.status(400).json({ message: "Failed to update content" });
    }
  });

  // Translation management routes
  app.get("/api/admin/content/:id/translations", requireAdminAuth, async (req, res) => {
    try {
      const contentId = parseInt(req.params.id);
      const translations = await storage.getContentTranslations(contentId);
      res.json(translations);
    } catch (error) {
      console.error("Get translations error:", error);
      res.status(500).json({ message: "Failed to fetch translations" });
    }
  });

  app.put("/api/admin/content/:id/translations/:language", requireAdminAuth, async (req: AdminRequest, res) => {
    try {
      const contentId = parseInt(req.params.id);
      const language = req.params.language;
      const { translatedValue } = req.body;
      
      if (!translatedValue || !req.admin) {
        return res.status(400).json({ message: "Translated value required" });
      }

      const translation = await storage.updateTranslation(contentId, language, translatedValue, req.admin.id);
      res.json(translation);
    } catch (error) {
      console.error("Update translation error:", error);
      res.status(400).json({ message: "Failed to update translation" });
    }
  });

  // Helper function to append data to Google Sheets
  async function appendToGoogleSheet(spreadsheetId: string, range: string, values: any[][]) {
    try {
      // For demo purposes, we'll use a webhook approach or direct API call
      // In production, you'd set up Google Sheets API with service account credentials
      
      const response = await fetch(`https://script.google.com/macros/s/AKfycbzYourScriptIdHere/exec`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          spreadsheetId,
          range,
          values
        })
      });

      return response.ok;
    } catch (error) {
      console.error('Google Sheets error:', error);
      return false;
    }
  }

  // Signup route for newsletter/updates with Google Sheets integration
  app.post("/api/signup", async (req, res) => {
    try {
      const { email, zipCode, firstName, lastName, phoneNumber } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      // Google Sheets integration
      const SHEET_ID = "1bTTdzCuP9bNPvRDON3rVVQD45_kdsmXIjdnYdmV-36k";
      const RANGE = "Sheet1!A:E"; // Columns A-E for email, firstName, lastName, zipCode, phoneNumber

      // Create the row data
      const values = [[
        email,
        firstName || "",
        lastName || "",
        zipCode || "",
        phoneNumber || "",
        new Date().toISOString() // Add timestamp
      ]];

      // Log the signup data
      console.log("New signup:", {
        email,
        firstName,
        lastName,
        zipCode,
        phoneNumber,
        timestamp: new Date().toISOString()
      });

      res.json({ 
        message: "Successfully signed up for updates",
        data: { email, firstName, lastName, zipCode, phoneNumber }
      });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ message: "Failed to process signup" });
    }
  });

  // Volunteer application route with Google Sheets integration
  app.post("/api/volunteer", async (req, res) => {
    try {
      const { 
        firstName, 
        lastName, 
        email, 
        phone, 
        zipCode, 
        interests, 
        availability, 
        languagePreference, 
        additionalInfo 
      } = req.body;
      
      if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: "First name, last name, and email are required" });
      }

      // Log the volunteer application data
      console.log("New volunteer application:", {
        firstName,
        lastName,
        email,
        phone,
        zipCode,
        interests: Array.isArray(interests) ? interests.join(', ') : interests,
        availability: Array.isArray(availability) ? availability.join(', ') : availability,
        languagePreference,
        additionalInfo,
        timestamp: new Date().toISOString()
      });

      res.json({ 
        message: "Successfully submitted volunteer application",
        data: { firstName, lastName, email, phone, zipCode }
      });
    } catch (error) {
      console.error("Volunteer application error:", error);
      res.status(500).json({ message: "Failed to process volunteer application" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

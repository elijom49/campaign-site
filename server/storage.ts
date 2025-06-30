import {
  users,
  adminUsers,
  editableContent,
  contentTranslations,
  type User,
  type InsertUser,
  type AdminUser,
  type InsertAdminUser,
  type EditableContent,
  type InsertEditableContent,
  type ContentTranslation,
  type InsertContentTranslation,
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Admin operations
  getAdminByEmail(email: string): Promise<AdminUser | undefined>;
  createAdmin(admin: InsertAdminUser): Promise<AdminUser>;
  
  // Content management
  getEditableContent(): Promise<EditableContent[]>;
  getContentByKey(key: string): Promise<EditableContent | undefined>;
  updateContent(id: number, value: string, updatedBy: number): Promise<EditableContent>;
  createContent(content: InsertEditableContent): Promise<EditableContent>;
  
  // Translation management
  getContentTranslations(contentId: number): Promise<ContentTranslation[]>;
  updateTranslation(contentId: number, language: string, value: string, updatedBy: number): Promise<ContentTranslation>;
  getTranslationByContentAndLanguage(contentId: number, language: string): Promise<ContentTranslation | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Admin operations
  async getAdminByEmail(email: string): Promise<AdminUser | undefined> {
    const [admin] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return admin || undefined;
  }

  async createAdmin(insertAdmin: InsertAdminUser): Promise<AdminUser> {
    const [admin] = await db
      .insert(adminUsers)
      .values(insertAdmin)
      .returning();
    return admin;
  }

  // Content management
  async getEditableContent(): Promise<EditableContent[]> {
    return await db.select().from(editableContent);
  }

  async getContentByKey(key: string): Promise<EditableContent | undefined> {
    const [content] = await db.select().from(editableContent).where(eq(editableContent.contentKey, key));
    return content || undefined;
  }

  async createContent(insertContent: InsertEditableContent): Promise<EditableContent> {
    const [content] = await db
      .insert(editableContent)
      .values(insertContent)
      .returning();
    return content;
  }

  async updateContent(id: number, value: string, updatedBy: number): Promise<EditableContent> {
    const [content] = await db
      .update(editableContent)
      .set({ 
        contentValue: value, 
        updatedAt: new Date(),
        updatedBy 
      })
      .where(eq(editableContent.id, id))
      .returning();
    return content;
  }

  // Translation management
  async getContentTranslations(contentId: number): Promise<ContentTranslation[]> {
    return await db.select().from(contentTranslations).where(eq(contentTranslations.contentId, contentId));
  }

  async getTranslationByContentAndLanguage(contentId: number, language: string): Promise<ContentTranslation | undefined> {
    const [translation] = await db
      .select()
      .from(contentTranslations)
      .where(and(
        eq(contentTranslations.contentId, contentId),
        eq(contentTranslations.language, language)
      ));
    return translation || undefined;
  }

  async updateTranslation(contentId: number, language: string, value: string, updatedBy: number): Promise<ContentTranslation> {
    const existing = await this.getTranslationByContentAndLanguage(contentId, language);
    
    if (existing) {
      const [translation] = await db
        .update(contentTranslations)
        .set({ 
          translatedValue: value, 
          updatedAt: new Date(),
          updatedBy 
        })
        .where(and(
          eq(contentTranslations.contentId, contentId),
          eq(contentTranslations.language, language)
        ))
        .returning();
      return translation;
    } else {
      const [translation] = await db
        .insert(contentTranslations)
        .values({
          contentId,
          language,
          translatedValue: value,
          updatedBy
        })
        .returning();
      return translation;
    }
  }
}

export const storage = new DatabaseStorage();

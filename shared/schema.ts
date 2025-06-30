import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Admin users table
export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("admin"), // "owner" or "admin"
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Content management table for editable content
export const editableContent = pgTable("editable_content", {
  id: serial("id").primaryKey(),
  contentKey: varchar("content_key", { length: 100 }).notNull().unique(),
  contentValue: text("content_value").notNull(),
  contentType: varchar("content_type", { length: 50 }).notNull(), // "text", "image", "url"
  section: varchar("section", { length: 50 }).notNull(), // "homepage", "about", "contact", etc.
  updatedAt: timestamp("updated_at").defaultNow(),
  updatedBy: integer("updated_by").references(() => adminUsers.id),
});

// Translations table for multilingual content
export const contentTranslations = pgTable("content_translations", {
  id: serial("id").primaryKey(),
  contentId: integer("content_id").references(() => editableContent.id).notNull(),
  language: varchar("language", { length: 5 }).notNull(), // "en", "es", "zh", "pl", "ar"
  translatedValue: text("translated_value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
  updatedBy: integer("updated_by").references(() => adminUsers.id),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).pick({
  email: true,
  password: true,
  role: true,
});

export const insertEditableContentSchema = createInsertSchema(editableContent).pick({
  contentKey: true,
  contentValue: true,
  contentType: true,
  section: true,
});

export const insertContentTranslationSchema = createInsertSchema(contentTranslations).pick({
  contentId: true,
  language: true,
  translatedValue: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type EditableContent = typeof editableContent.$inferSelect;
export type InsertEditableContent = z.infer<typeof insertEditableContentSchema>;
export type ContentTranslation = typeof contentTranslations.$inferSelect;
export type InsertContentTranslation = z.infer<typeof insertContentTranslationSchema>;

var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";
import session from "express-session";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  adminUsers: () => adminUsers,
  contentTranslations: () => contentTranslations,
  editableContent: () => editableContent,
  insertAdminUserSchema: () => insertAdminUserSchema,
  insertContentTranslationSchema: () => insertContentTranslationSchema,
  insertEditableContentSchema: () => insertEditableContentSchema,
  insertUserSchema: () => insertUserSchema,
  users: () => users
});
import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("admin"),
  // "owner" or "admin"
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow()
});
var editableContent = pgTable("editable_content", {
  id: serial("id").primaryKey(),
  contentKey: varchar("content_key", { length: 100 }).notNull().unique(),
  contentValue: text("content_value").notNull(),
  contentType: varchar("content_type", { length: 50 }).notNull(),
  // "text", "image", "url"
  section: varchar("section", { length: 50 }).notNull(),
  // "homepage", "about", "contact", etc.
  updatedAt: timestamp("updated_at").defaultNow(),
  updatedBy: integer("updated_by").references(() => adminUsers.id)
});
var contentTranslations = pgTable("content_translations", {
  id: serial("id").primaryKey(),
  contentId: integer("content_id").references(() => editableContent.id).notNull(),
  language: varchar("language", { length: 5 }).notNull(),
  // "en", "es", "zh", "pl", "ar"
  translatedValue: text("translated_value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
  updatedBy: integer("updated_by").references(() => adminUsers.id)
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertAdminUserSchema = createInsertSchema(adminUsers).pick({
  email: true,
  password: true,
  role: true
});
var insertEditableContentSchema = createInsertSchema(editableContent).pick({
  contentKey: true,
  contentValue: true,
  contentType: true,
  section: true
});
var insertContentTranslationSchema = createInsertSchema(contentTranslations).pick({
  contentId: true,
  language: true,
  translatedValue: true
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq, and } from "drizzle-orm";
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  // Admin operations
  async getAdminByEmail(email) {
    const [admin] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return admin || void 0;
  }
  async createAdmin(insertAdmin) {
    const [admin] = await db.insert(adminUsers).values(insertAdmin).returning();
    return admin;
  }
  // Content management
  async getEditableContent() {
    return await db.select().from(editableContent);
  }
  async getContentByKey(key) {
    const [content] = await db.select().from(editableContent).where(eq(editableContent.contentKey, key));
    return content || void 0;
  }
  async createContent(insertContent) {
    const [content] = await db.insert(editableContent).values(insertContent).returning();
    return content;
  }
  async updateContent(id, value, updatedBy) {
    const [content] = await db.update(editableContent).set({
      contentValue: value,
      updatedAt: /* @__PURE__ */ new Date(),
      updatedBy
    }).where(eq(editableContent.id, id)).returning();
    return content;
  }
  // Translation management
  async getContentTranslations(contentId) {
    return await db.select().from(contentTranslations).where(eq(contentTranslations.contentId, contentId));
  }
  async getTranslationByContentAndLanguage(contentId, language) {
    const [translation] = await db.select().from(contentTranslations).where(and(
      eq(contentTranslations.contentId, contentId),
      eq(contentTranslations.language, language)
    ));
    return translation || void 0;
  }
  async updateTranslation(contentId, language, value, updatedBy) {
    const existing = await this.getTranslationByContentAndLanguage(contentId, language);
    if (existing) {
      const [translation] = await db.update(contentTranslations).set({
        translatedValue: value,
        updatedAt: /* @__PURE__ */ new Date(),
        updatedBy
      }).where(and(
        eq(contentTranslations.contentId, contentId),
        eq(contentTranslations.language, language)
      )).returning();
      return translation;
    } else {
      const [translation] = await db.insert(contentTranslations).values({
        contentId,
        language,
        translatedValue: value,
        updatedBy
      }).returning();
      return translation;
    }
  }
};
var storage = new DatabaseStorage();

// server/adminAuth.ts
import bcrypt from "bcryptjs";
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}
async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
async function createInitialAdmin(email, password, role = "owner") {
  const hashedPassword = await hashPassword(password);
  return await storage.createAdmin({
    email,
    password: hashedPassword,
    role
  });
}
var requireAdminAuth = async (req, res, next) => {
  const session2 = req.session;
  const sessionAdmin = session2?.admin;
  if (!sessionAdmin) {
    return res.status(401).json({ message: "Admin authentication required" });
  }
  const admin = await storage.getAdminByEmail(sessionAdmin.email);
  if (!admin || !admin.isActive) {
    delete session2.admin;
    return res.status(401).json({ message: "Admin authentication invalid" });
  }
  req.admin = {
    id: admin.id,
    email: admin.email,
    role: admin.role
  };
  next();
};
var requireOwnerAuth = async (req, res, next) => {
  await requireAdminAuth(req, res, () => {
    if (req.admin?.role !== "owner") {
      return res.status(403).json({ message: "Owner access required" });
    }
    next();
  });
};

// server/seedContent.ts
var initialContent = [
  {
    contentKey: "homepage_title",
    contentValue: "Your Future U.S. Senator Lives Among the People",
    contentType: "text",
    section: "homepage"
  },
  {
    contentKey: "homepage_tagline",
    contentValue: "Power to the People, Not the Powerful",
    contentType: "text",
    section: "homepage"
  },
  {
    contentKey: "candidate_quote",
    contentValue: "I'm running for U.S. Senate because I believe the government should promote equality for everyone.",
    contentType: "text",
    section: "homepage"
  },
  {
    contentKey: "about_bio",
    contentValue: "Jump was born and raised in Chicago. As an Illinois Native, he is uniquely equipped to understand and address the challenges of working class Illinoisans.",
    contentType: "text",
    section: "about"
  },
  {
    contentKey: "contact_email",
    contentValue: "sims@jump2026.com",
    contentType: "email",
    section: "contact"
  },
  {
    contentKey: "social_tiktok",
    contentValue: "https://www.tiktok.com/@jumpforsenate",
    contentType: "url",
    section: "social"
  },
  {
    contentKey: "social_linkedin",
    contentValue: "https://www.linkedin.com/in/jumpforsenate",
    contentType: "url",
    section: "social"
  },
  {
    contentKey: "social_youtube",
    contentValue: "https://www.youtube.com/@jumpforsenate",
    contentType: "url",
    section: "social"
  },
  {
    contentKey: "policy_economic_justice_title",
    contentValue: "Economic Justice",
    contentType: "text",
    section: "policies"
  },
  {
    contentKey: "policy_economic_justice_desc",
    contentValue: "Fighting for fair wages, worker rights, and economic opportunities that build strong communities.",
    contentType: "text",
    section: "policies"
  },
  {
    contentKey: "policy_healthcare_title",
    contentValue: "Healthcare Access",
    contentType: "text",
    section: "policies"
  },
  {
    contentKey: "policy_healthcare_desc",
    contentValue: "Ensuring every Illinoisan has access to affordable, quality healthcare as a fundamental right.",
    contentType: "text",
    section: "policies"
  }
];
async function seedDatabase() {
  try {
    console.log("Seeding database with initial content...");
    for (const content of initialContent) {
      try {
        await storage.createContent(content);
        console.log(`Created content: ${content.contentKey}`);
      } catch (error) {
        console.log(`Content ${content.contentKey} already exists or failed to create`);
      }
    }
    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
async function createAdminUser(email, password, role = "owner") {
  try {
    const admin = await createInitialAdmin(email, password, role);
    console.log(`Created admin user: ${admin.email} (${admin.role})`);
    return admin;
  } catch (error) {
    console.error("Error creating admin user:", error);
    throw error;
  }
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/admin/init", async (req, res) => {
    try {
      const { ownerEmail, ownerPassword } = req.body;
      if (!ownerEmail || !ownerPassword) {
        return res.status(400).json({ message: "Owner email and password required" });
      }
      await seedDatabase();
      const admin = await createAdminUser(ownerEmail, ownerPassword, "owner");
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
  app2.post("/api/admin/login", async (req, res) => {
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
      req.session.admin = {
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
  app2.post("/api/admin/logout", (req, res) => {
    delete req.session.admin;
    res.json({ message: "Logged out successfully" });
  });
  app2.get("/api/admin/me", requireAdminAuth, (req, res) => {
    res.json(req.admin);
  });
  app2.post("/api/admin/users", requireOwnerAuth, async (req, res) => {
    try {
      const result = insertAdminUserSchema.parse(req.body);
      const admin = await createInitialAdmin(result.email, result.password, result.role);
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
  app2.get("/api/admin/content", requireAdminAuth, async (req, res) => {
    try {
      const content = await storage.getEditableContent();
      res.json(content);
    } catch (error) {
      console.error("Get content error:", error);
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });
  app2.post("/api/admin/content", requireAdminAuth, async (req, res) => {
    try {
      const result = insertEditableContentSchema.parse(req.body);
      const content = await storage.createContent(result);
      res.json(content);
    } catch (error) {
      console.error("Create content error:", error);
      res.status(400).json({ message: "Failed to create content" });
    }
  });
  app2.put("/api/admin/content/:id", requireAdminAuth, async (req, res) => {
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
  app2.get("/api/admin/content/:id/translations", requireAdminAuth, async (req, res) => {
    try {
      const contentId = parseInt(req.params.id);
      const translations = await storage.getContentTranslations(contentId);
      res.json(translations);
    } catch (error) {
      console.error("Get translations error:", error);
      res.status(500).json({ message: "Failed to fetch translations" });
    }
  });
  app2.put("/api/admin/content/:id/translations/:language", requireAdminAuth, async (req, res) => {
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
  async function appendToGoogleSheet(spreadsheetId, range, values) {
    try {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbzYourScriptIdHere/exec`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          spreadsheetId,
          range,
          values
        })
      });
      return response.ok;
    } catch (error) {
      console.error("Google Sheets error:", error);
      return false;
    }
  }
  app2.post("/api/signup", async (req, res) => {
    try {
      const { email, zipCode, firstName, lastName, phoneNumber } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      const SHEET_ID = "1bTTdzCuP9bNPvRDON3rVVQD45_kdsmXIjdnYdmV-36k";
      const RANGE = "Sheet1!A:E";
      const values = [[
        email,
        firstName || "",
        lastName || "",
        zipCode || "",
        phoneNumber || "",
        (/* @__PURE__ */ new Date()).toISOString()
        // Add timestamp
      ]];
      console.log("New signup:", {
        email,
        firstName,
        lastName,
        zipCode,
        phoneNumber,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
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
  app2.post("/api/volunteer", async (req, res) => {
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
      console.log("New volunteer application:", {
        firstName,
        lastName,
        email,
        phone,
        zipCode,
        interests: Array.isArray(interests) ? interests.join(", ") : interests,
        availability: Array.isArray(availability) ? availability.join(", ") : availability,
        languagePreference,
        additionalInfo,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
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
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET || "campaign-admin-secret-key-change-in-production",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    // Set to true in production with HTTPS
    maxAge: 24 * 60 * 60 * 1e3
    // 24 hours
  }
}));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();

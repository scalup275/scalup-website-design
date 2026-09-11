import "./config/env.js"; // MUST be first import

import express from "express";
import cors from "cors";
import { sendEmail } from "./utils/mailer.js";
import blogRoutes from "./blogs/blog.routes.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import adminRoutes from "./auth/admin.routes.js";
const app = express();

const allowedOrigins = [
  "http://localhost:8080",
  "http://localhost:8081",
  "https://www.scalup.org",
  "https://scalup.org",
  "https://scalupblogsadmin.vercel.app",
];

// Global middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error("Not allowed by CORS")); // Deny the request
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
// Connect MongoDB
console.log("MONGODB_URI loaded:", !!process.env.MONGODB_URI);

export const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    const isConnected = conn.connections[0].readyState === 1;
    console.log("MongoDB connected:", isConnected);
    console.log("Connected DB:", conn.connection.name);
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};

connectMongo();

// Health check route
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    service: "Scalup Backend",
    message: "Server is running",
  });
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message, classPreference, source } = req.body;

    // Required for all leads
    if (!name || !email || !phone) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    // Only required for demo / popup

    await sendEmail({
      name,
      email,
      phone,
      message,
      classPreference,
      source,
    });

    res.json({ success: true, message: "Email sent ✅" });
  } catch (err) {
    console.error("CONTACT ERROR →", err);
    res.status(500).json({ error: "Email failed ❌" });
  }
});

// Blog routes
app.use("/api/blogs", blogRoutes);

//auth routes
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 4000;

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`scalup ${PORT}`);
  });
}

export default app;

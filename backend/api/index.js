import "../config/env.js"; // MUST be first import

import express from "express";
import cors from "cors";
import { sendEmail } from "../utils/mailer.js";
import blogRoutes from "./blogs/blog.routes.js";
import connectDB from "../config/db.js";
const app = express();
await connectDB();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message, classPreference, source } = req.body;

    // Required for all leads
    if (!name || !email || !phone || !source) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    // Only required for demo / popup
    if (source !== "consultation" && !classPreference) {
      return res.status(400).json({
        error: "Class preference is required",
      });
    }

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

app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 3000;


  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });


export default app;

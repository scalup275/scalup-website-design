import express from "express";
import { loginAdmin, createAdmin, logoutAdmin } from "./admin.controller.js";
import { protectAdmin } from "./auth.middleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/create", createAdmin);
router.post("/logout", logoutAdmin);

// test protected route
router.get("/me", protectAdmin, (req, res) => {
  res.json({ admin: req.admin });
});

export default router;

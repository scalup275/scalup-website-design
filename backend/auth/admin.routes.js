import express from "express";
import {
  loginAdmin,
  createAdmin,
  logoutAdmin,
  updatePassword,
} from "./admin.controller.js";
import { protectAdmin } from "./auth.middleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/create", createAdmin);
router.post("/logout", logoutAdmin);
router.put("/update-password", protectAdmin, updatePassword);
// test protected route
router.get("/me", protectAdmin, (req, res) => {
  res.json({ admin: req.admin });
});

export default router;

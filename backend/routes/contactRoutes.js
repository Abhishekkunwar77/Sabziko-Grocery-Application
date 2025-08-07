import express from "express";
import {
  submitContactForm,
  getAllContactMessages,
} from "../controllers/contactController.js";

const router = express.Router();

// FORM SUBMISSION from frontend
router.post("/", submitContactForm);

// VIEW all messages (for seller)
router.get("/", getAllContactMessages); // Add auth middleware if needed

export default router;

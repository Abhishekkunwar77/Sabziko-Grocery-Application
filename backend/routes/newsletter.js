import mongoose from "mongoose";
import express from "express";

const router = express.Router();

// Newsletter Schema
const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const Newsletter = mongoose.model("Newsletter", newsletterSchema);

// Subscribe to newsletter
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const existingEmail = await Newsletter.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already subscribed" });
    }

    const newSubscription = new Newsletter({ email });
    await newSubscription.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Successfully subscribed to the newsletter",
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get all subscribed emails (for seller dashboard)
router.get("/subscribers", async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ subscribedAt: -1 });
    res.status(200).json({ success: true, data: subscribers });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Delete a single subscribed email
router.delete("/subscribers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const subscriber = await Newsletter.findByIdAndDelete(id);
    if (!subscriber) {
      return res
        .status(404)
        .json({ success: false, message: "Subscriber not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Subscriber deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});
export default router;

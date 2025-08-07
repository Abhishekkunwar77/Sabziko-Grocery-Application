import ContactMessage from "../models/ContactMessage.js";

export const submitContactForm = async (req, res) => {
  try {
    const newMessage = new ContactMessage(req.body);
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message sent!" });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getAllContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, messages });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Could not fetch messages" });
  }
};

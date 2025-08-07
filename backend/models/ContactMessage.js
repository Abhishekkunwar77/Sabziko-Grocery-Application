import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    details: String,
  },
  { timestamps: true }
);

export default mongoose.model("ContactMessage", contactMessageSchema);

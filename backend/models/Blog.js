import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  heading: String,
  subheading: String,
  content: String,
  author: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;

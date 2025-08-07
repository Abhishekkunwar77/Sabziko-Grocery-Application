// routes/blogRoutes.js (ES module style)
import express from "express";
import multer from "multer";
import Blog from "../models/Blog.js";

const router = express.Router();

// Configure multer for image uploads
const upload = multer({ dest: "uploads/" });

/**
 * @route   POST /api/blogs
 * @desc    Create a new blog post
 */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, heading, subheading, content, author } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required." });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    const blog = new Blog({
      title,
      heading,
      subheading,
      content,
      author,
      imageUrl,
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error("Error creating blog:", err);
    res
      .status(500)
      .json({ message: "Failed to create blog", error: err.message });
  }
});

/**
 * @route   GET /api/blogs
 * @desc    Get all blog posts
 */
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res
      .status(500)
      .json({ message: "Failed to fetch blogs", error: err.message });
  }
});

/**
 * @route   GET /api/blogs/:id
 * @desc    Get a single blog post by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    console.error("Error fetching blog by ID:", err);
    res
      .status(500)
      .json({ message: "Failed to fetch blog", error: err.message });
  }
});

export default router;

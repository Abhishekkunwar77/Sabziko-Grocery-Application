import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { stripeWebhooks } from "./controllers/orderController.js";
import newsletterRouter from "./routes/newsletter.js";
import contactRoutes from "./routes/contactRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

await connectDB();
await connectCloudinary();

// Stripe webhook must come before body parsers
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// Body parsers
app.use(express.json());
app.use(cookieParser());

// ✅ Allow CORS from localhost and Vercel frontend
const allowedOrigins = [
  "http://localhost:5173",
  "https://sabziko-grocery-application.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => res.send("API is live 🚀"));
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/contact", contactRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/uploads", express.static("uploads"));

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

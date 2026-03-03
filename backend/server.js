const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// 🔥 Strong CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware to parse JSON
app.use(express.json());

// ================= ROUTES =================

// Root route
app.get("/", (req, res) => {
  res.send("UpTrend API Running");
});

// Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Wallet routes
const walletRoutes = require("./routes/walletRoutes");
app.use("/api/wallet", walletRoutes);

// Protected admin test route
const { protect } = require("./middleware/authMiddleware");
const authorizeRoles = require("./middleware/roleMiddleware");

app.get(
  "/api/admin-test",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin!" });
  }
);

// ================= START SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
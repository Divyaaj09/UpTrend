const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load env
dotenv.config();

// Connect DB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");
const authorizeRoles = require("./middleware/roleMiddleware");

// Root route
app.get("/", (req, res) => {
  res.send("UpTrend API Running");
});

// Auth routes
app.use("/api/auth", authRoutes);

// Wallet routes
const walletRoutes = require("./routes/walletRoutes");
app.use("/api/wallet", walletRoutes);

// Admin test route
app.get(
  "/api/admin-test",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin!" });
  }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
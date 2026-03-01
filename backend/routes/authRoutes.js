const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/login", authController.loginUser);
router.post("/register", authController.registerUser);

router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;
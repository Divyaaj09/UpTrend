const walletController = require("../controllers/walletController");
console.log(walletController);
const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getBalance,
  deposit,
  withdraw,
  getTransactions,
} = require("../controllers/walletController");

router.get("/", protect, getBalance);
router.put("/deposit", protect, deposit);
router.put("/withdraw", protect, withdraw);
router.get("/transactions", protect, getTransactions);

module.exports = router;
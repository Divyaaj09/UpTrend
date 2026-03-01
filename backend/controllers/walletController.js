const User = require("../models/User");
const Transaction = require("../models/Transaction");

// Get Balance
const getBalance = async (req, res) => {
  res.json({
    walletBalance: req.user.walletBalance,
  });
};

// Deposit
const deposit = async (req, res) => {
  try {
    const numAmount = Number(req.body.amount);

    if (!numAmount || numAmount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $inc: { walletBalance: numAmount } },
      { new: true }
    );

    await Transaction.create({
      user: req.user._id,
      type: "deposit",
      amount: numAmount,
    });

    res.json({
      message: "Deposit successful",
      walletBalance: user.walletBalance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Withdraw
const withdraw = async (req, res) => {
  try {
    const numAmount = Number(req.body.amount);

    if (!numAmount || numAmount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const user = await User.findOneAndUpdate(
      {
        _id: req.user._id,
        walletBalance: { $gte: numAmount },
      },
      { $inc: { walletBalance: -numAmount } },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    await Transaction.create({
      user: req.user._id,
      type: "withdraw",
      amount: numAmount,
    });

    res.json({
      message: "Withdraw successful",
      walletBalance: user.walletBalance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getBalance,
  deposit,
  withdraw,
  getTransactions,
};
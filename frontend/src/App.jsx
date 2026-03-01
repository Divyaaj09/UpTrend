import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import AddTransactionModal from "./components/AddTransactionModal";

function Dashboard() {
  const [open, setOpen] = useState(false);

  // ✅ Load safely on first render
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Save whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
    setOpen(false);
  };

  const handleDelete = (index) => {
    setTransactions((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expenses;

  return (
    <div className="space-y-6">

      <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl shadow-lg">
        <h2 className="text-lg text-gray-200">Total Balance</h2>
        <p className="text-4xl font-bold mt-2">₹ {balance}</p>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 bg-black bg-opacity-30 px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          + Add Transaction
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-cardBg p-6 rounded-2xl shadow-md">
          <h3 className="text-gray-400">Income</h3>
          <p className="text-2xl font-semibold text-success mt-2">
            ₹ {income}
          </p>
        </div>

        <div className="bg-cardBg p-6 rounded-2xl shadow-md">
          <h3 className="text-gray-400">Expenses</h3>
          <p className="text-2xl font-semibold text-danger mt-2">
            ₹ {expenses}
          </p>
        </div>

        <div className="bg-cardBg p-6 rounded-2xl shadow-md">
          <h3 className="text-gray-400">Transactions</h3>
          <p className="text-2xl font-semibold mt-2">
            {transactions.length}
          </p>
        </div>
      </div>

      {transactions.length > 0 ? (
        <div className="bg-cardBg p-6 rounded-2xl space-y-4">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>

          {transactions.map((t, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
            >
              <div>
                <p className="font-medium">{t.note || "No description"}</p>
                <p className="text-sm text-gray-400">
                  {t.type === "income" ? "Income" : "Expense"}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <p
                  className={`font-semibold ${
                    t.type === "income"
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"} ₹{t.amount}
                </p>

                <button
                  onClick={() => handleDelete(index)}
                  className="text-sm bg-red-600 px-3 py-1 rounded hover:opacity-80 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-cardBg p-8 rounded-2xl text-center text-gray-400">
          No transactions yet. Start by adding your first transaction 🚀
        </div>
      )}

      <AddTransactionModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onAdd={handleAddTransaction}
      />
    </div>
  );
}

function Wallet() {
  return <div className="text-2xl">Wallet Page</div>;
}

function Transactions() {
  return <div className="text-2xl">Transactions Page</div>;
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
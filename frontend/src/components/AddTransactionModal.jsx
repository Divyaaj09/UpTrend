import { useState } from "react";

const AddTransactionModal = ({ isOpen, onClose, onAdd }) => {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!amount || Number(amount) <= 0) return;

    onAdd({
      type,
      amount: Number(amount),
      note,
      date: new Date().toISOString(),
    });

    // Reset fields
    setAmount("");
    setNote("");
    setType("income");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-cardBg w-full max-w-md p-6 rounded-2xl shadow-xl">
        
        <h2 className="text-xl font-semibold mb-6">Add Transaction</h2>

        {/* Type Toggle */}
        <div className="flex mb-4">
          <button
            onClick={() => setType("income")}
            className={`flex-1 p-2 rounded-l-lg transition ${
              type === "income"
                ? "bg-success text-white"
                : "bg-gray-700"
            }`}
          >
            Income
          </button>
          <button
            onClick={() => setType("expense")}
            className={`flex-1 p-2 rounded-r-lg transition ${
              type === "expense"
                ? "bg-danger text-white"
                : "bg-gray-700"
            }`}
          >
            Expense
          </button>
        </div>

        {/* Amount */}
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 outline-none"
        />

        {/* Note */}
        <input
          type="text"
          placeholder="Description"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg bg-gray-800 outline-none"
        />

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 rounded-lg hover:opacity-80 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary rounded-lg hover:opacity-90 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTransactionModal;
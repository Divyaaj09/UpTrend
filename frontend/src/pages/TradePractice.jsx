import { useState } from "react";
import { useTrading } from "../context/TradingContext";

const TradePractice = () => {
  const { placeTrade, positions } = useTrading();

  const [stock, setStock] = useState("AAPL");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(100);
  const [type, setType] = useState("buy");

  const handleTrade = () => {
    if (!quantity || !price) {
      alert("Enter valid values");
      return;
    }

    placeTrade({
      stock,
      quantity: Number(quantity),
      price: Number(price),
      type
    });
  };

  return (
    <div style={{ padding: "40px", background: "#111", color: "white" }}>
      <h1>Practice Trading</h1>

      <div style={{ marginTop: "20px" }}>
        <select value={stock} onChange={(e) => setStock(e.target.value)}>
          <option value="AAPL">AAPL</option>
          <option value="TSLA">TSLA</option>
          <option value="GOOGL">GOOGL</option>
          <option value="MSFT">MSFT</option>
        </select>

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>

        <button onClick={handleTrade}>
          {type === "buy" ? "Buy" : "Sell"}
        </button>
      </div>

      <h2 style={{ marginTop: "40px" }}>Open Positions</h2>

      {positions.map((p, index) => (
        <div key={index}>
          {p.stock} — Qty: {p.quantity} — Entry: ₹{p.entryPrice}
        </div>
      ))}
    </div>
  );
};

export default TradePractice;
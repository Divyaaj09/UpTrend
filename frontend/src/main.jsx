import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // ✅ THIS WAS MISSING
import { TradingProvider } from "./context/TradingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TradingProvider>
      <App />
    </TradingProvider>
  </React.StrictMode>
);
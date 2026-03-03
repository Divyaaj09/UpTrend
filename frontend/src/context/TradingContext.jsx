import { createContext, useContext, useState } from "react";

const TradingContext = createContext();

export const TradingProvider = ({ children }) => {
  const [balance, setBalance] = useState(1000);

  const placeTrade = (amount) => {
    if (amount > balance) return;

    const win = Math.random() > 0.5;

    if (win) {
      setBalance((prev) => prev + amount);
      alert("You won!");
    } else {
      setBalance((prev) => prev - amount);
      alert("You lost!");
    }
  };

  return (
    <TradingContext.Provider value={{ balance, placeTrade }}>
      {children}
    </TradingContext.Provider>
  );
};

export const useTrading = () => useContext(TradingContext);
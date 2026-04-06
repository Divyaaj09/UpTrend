import { createContext, useContext, useState } from "react";
import { calculateDisciplineScore } from "../utils/calculateDiscipline";
import { getAchievements } from "../utils/achievements";

const TradingContext = createContext();

export const TradingProvider = ({ children }) => {
  const [balance, setBalance] = useState(100000); // ₹1L
  const [trades, setTrades] = useState([]);
  const [openPosition, setOpenPosition] = useState(null);
  const [achievements, setAchievements] = useState([]);

  // 🟢 OPEN TRADE
  const openTrade = ({ asset, type, price, quantity }) => {
    if (openPosition) return false;

    const cost = price * quantity;

    if (cost > balance) {
      alert("Insufficient balance");
      return false;
    }

    setBalance((prev) => prev - cost);

    setOpenPosition({
      asset,
      type,
      entryPrice: price,
      quantity,
      entryTime: Date.now(),
    });

    return true;
  };

  // 🔴 CLOSE TRADE
  const closeTrade = (currentPrice) => {
    if (!openPosition) return;

    let pl = 0;

    if (openPosition.type === "LONG") {
      pl =
        (currentPrice - openPosition.entryPrice) *
        openPosition.quantity;
    } else {
      pl =
        (openPosition.entryPrice - currentPrice) *
        openPosition.quantity;
    }

    const finalAmount =
      openPosition.entryPrice * openPosition.quantity + pl;

    const updatedTrades = [
      ...trades,
      {
        ...openPosition,
        exitPrice: currentPrice,
        pl,
        exitTime: Date.now(),
      },
    ];

    setTrades(updatedTrades);
    setBalance((prev) => prev + finalAmount);
    setOpenPosition(null);

    // 🧠 Discipline
    const disciplineScore = calculateDisciplineScore(updatedTrades);

    // 🏆 Achievements
    const newAchievements = getAchievements(
      updatedTrades,
      disciplineScore
    );

    setAchievements(newAchievements);
  };

  // 🔄 RESET
  const resetAccount = () => {
    setBalance(100000);
    setTrades([]);
    setOpenPosition(null);
    setAchievements([]);
  };

  return (
    <TradingContext.Provider
      value={{
        balance,
        trades,
        openPosition,
        achievements,
        openTrade,
        closeTrade,
        resetAccount,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

export const useTrading = () => useContext(TradingContext);
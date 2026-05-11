import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase";

const TradingContext = createContext();

export const TradingProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [balance, setBalance] = useState(10000);
  const [trades, setTrades] = useState([]);
  const [openPosition, setOpenPosition] = useState(null);
  const [xp, setXp] = useState(0);
  const [loading, setLoading] = useState(true);

  // ✅ Wait for Firebase auth to be ready BEFORE Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setLoading(false);
        return;
      }

      setUser(firebaseUser);

      try {
        const ref = doc(db, "users", firebaseUser.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();
          setBalance(data.balance ?? 10000);
          setTrades(data.trades ?? []);
          setOpenPosition(data.openPosition ?? null);
          setXp(data.xp ?? 0);
        } else {
          await setDoc(ref, {
            balance: 10000,
            trades: [],
            openPosition: null,
            xp: 0,
          });
        }
      } catch (err) {
        console.log("Firestore safe fail:", err.message);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Safe save
  const saveData = async (newBalance, newTrades, newPosition, newXp) => {
    if (!user) return;

    try {
      const ref = doc(db, "users", user.uid);
      await updateDoc(ref, {
        balance: newBalance,
        trades: newTrades,
        openPosition: newPosition,
        xp: newXp,
      });
    } catch (err) {
      console.log("Save failed:", err.message);
    }
  };

  // ✅ OPEN TRADE
  const openTrade = ({ asset, type, price, quantity, journal }) => {
    if (openPosition) {
      alert("Close existing trade first");
      return;
    }

    const position = {
      asset,
      type,
      entryPrice: price,
      quantity,
      journal,
      openedAt: Date.now(),
    };

    setOpenPosition(position);
    saveData(balance, trades, position, xp);
  };

  // ✅ CLOSE TRADE
  const closeTrade = (exitPrice) => {
    if (!openPosition) return;

    const { entryPrice, quantity, type } = openPosition;

    const pl =
      type === "LONG"
        ? (exitPrice - entryPrice) * quantity
        : (entryPrice - exitPrice) * quantity;

    const closedTrade = {
      ...openPosition,
      exitPrice,
      pl,
      closedAt: Date.now(),
    };

    const newBalance = balance + pl;
    const updatedTrades = [...trades, closedTrade];
    const newXp = xp + 20;

    setBalance(newBalance);
    setTrades(updatedTrades);
    setOpenPosition(null);
    setXp(newXp);

    saveData(newBalance, updatedTrades, null, newXp);
  };

  return (
    <TradingContext.Provider
      value={{
        balance,
        trades,
        openPosition,
        openTrade,
        closeTrade,
        xp,
        setXp,
        loading,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

export const useTrading = () => {
  const context = useContext(TradingContext);
  if (!context) {
    throw new Error("useTrading must be used inside TradingProvider");
  }
  return context;
};
import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [xp, setXp] = useState(0);

  // Load XP from localStorage
  useEffect(() => {
    const savedXP = localStorage.getItem("learnXP");
    if (savedXP) {
      setXp(parseInt(savedXP));
    }

    // Listen for storage updates (in case XP changes)
    const handleStorageChange = () => {
      const updatedXP = localStorage.getItem("learnXP");
      setXp(updatedXP ? parseInt(updatedXP) : 0);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const getLevel = () => {
    if (xp >= 1000) return { level: 5, title: "Capital Protector" };
    if (xp >= 700) return { level: 4, title: "Structured Strategist" };
    if (xp >= 400) return { level: 3, title: "Disciplined Trader" };
    if (xp >= 200) return { level: 2, title: "Risk Aware Trader" };
    return { level: 1, title: "Market Beginner" };
  };

  const trader = getLevel();

  const navLinkClass = (path) =>
    `px-4 py-2 rounded transition ${
      location.pathname === path
        ? "bg-green-600 text-white"
        : "text-gray-300 hover:bg-gray-800"
    }`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 border-b border-gray-800">
        
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold text-green-500">
            UpTrend
          </Link>

          <Link to="/" className={navLinkClass("/")}>
            Dashboard
          </Link>

          <Link to="/trade" className={navLinkClass("/trade")}>
            Trade
          </Link>

          <Link to="/portfolio" className={navLinkClass("/portfolio")}>
            Portfolio
          </Link>

          <Link to="/learn" className={navLinkClass("/learn")}>
            Academy
          </Link>
        </div>

        {/* Right Section - Trader Identity */}
        <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 text-right">
          <p className="text-xs text-gray-400">Trader Level</p>
          <p className="text-sm font-semibold text-green-400">
            Level {trader.level} – {trader.title}
          </p>
          <p className="text-xs text-gray-400">{xp} XP</p>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
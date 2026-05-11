import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [xp, setXp] = useState(0);

  useEffect(() => {
    const savedXP = localStorage.getItem("learnXP");
    if (savedXP) setXp(parseInt(savedXP));

    const handleStorageChange = () => {
      const updatedXP = localStorage.getItem("learnXP");
      setXp(updatedXP ? parseInt(updatedXP) : 0);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

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
        
        {/* Left */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold text-green-500">
            UpTrend
          </Link>

          <Link to="/" className={navLinkClass("/")}>Dashboard</Link>
          <Link to="/trade" className={navLinkClass("/trade")}>Trade</Link>
          <Link to="/portfolio" className={navLinkClass("/portfolio")}>Portfolio</Link>
          <Link to="/academy" className={navLinkClass("/academy")}>Academy</Link>   {/* ← Fixed */}
        </div>

        {/* Right — USER PROFILE + LEVEL + LOGOUT */}
        <div className="flex items-center gap-4">
          {user && (
            <>
              <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                <img
                  src={
                    user.photoURL ||
                    "https://ui-avatars.com/api/?name=" + user.email
                  }
                  alt="profile"
                  className="w-9 h-9 rounded-full"
                />
                <div className="text-sm text-left">
                  <p className="font-semibold">
                    {user.displayName || user.email}
                  </p>
                  <p className="text-xs text-gray-400">
                    Level {trader.level} – {trader.title}
                  </p>
                  <p className="text-xs text-gray-400">{xp} XP</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}
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
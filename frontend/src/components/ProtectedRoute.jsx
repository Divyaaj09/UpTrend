import React from "react";
import { Link } from "react-router-dom";

const getLevelFromXP = (xp) => {
  if (xp >= 1000) return 5;
  if (xp >= 700) return 4;
  if (xp >= 400) return 3;
  if (xp >= 200) return 2;
  return 1;
};

const getLevelTitle = (level) => {
  switch (level) {
    case 5:
      return "Capital Protector";
    case 4:
      return "Structured Strategist";
    case 3:
      return "Disciplined Trader";
    case 2:
      return "Risk Aware Trader";
    default:
      return "Market Beginner";
  }
};

const ProtectedRoute = ({ children, requiredLevel }) => {
  const savedXP = localStorage.getItem("learnXP");
  const xp = savedXP ? parseInt(savedXP) : 0;

  const userLevel = getLevelFromXP(xp);

  if (userLevel < requiredLevel) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center">
        <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg max-w-md">
          <h2 className="text-xl font-semibold text-red-400 mb-4">
            Feature Locked
          </h2>

          <p className="text-gray-300 mb-4">
            You need to reach{" "}
            <span className="text-green-400 font-semibold">
              Level {requiredLevel}
            </span>{" "}
            to unlock this feature.
          </p>

          <p className="text-sm text-gray-400 mb-6">
            Your current level:{" "}
            <span className="text-white">
              Level {userLevel} – {getLevelTitle(userLevel)}
            </span>
          </p>

          <Link
            to="/learn"
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
          >
            Go to Academy
          </Link>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
// src/App.jsx

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import Layout from "./layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Trade from "./pages/Trade";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AcademyHome from "./academy/AcademyHome";
import TopicReader from "./academy/TopicReader";

// NEW IMPORTS
import MarketReplay from "./pages/MarketReplay";
import DailyPractice from "./pages/DailyPractice";

function AppRoutes() {

  const { user, loading } = useAuth();

  if (loading) {

    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-slate-400 text-lg">
        Loading...
      </div>
    );
  }

  return (

    <Routes>

      {/* AUTH ROUTES */}

      {!user ? (
        <>

          <Route
            path="*"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

        </>
      ) : (

        /* MAIN APP */

        <Route
          path="/"
          element={<Layout />}
        >

          {/* DASHBOARD */}

          <Route
            index
            element={<Dashboard />}
          />

          {/* ACADEMY */}

          <Route
            path="academy"
            element={<AcademyHome />}
          />

          <Route
            path="learn"
            element={<TopicReader />}
          />

          {/* MARKET REPLAY */}

          <Route
            path="market-replay"
            element={
              <ProtectedRoute requiredLevel={1}>
                <MarketReplay />
              </ProtectedRoute>
            }
          />

          {/* DAILY PRACTICE */}

          <Route
            path="daily-practice"
            element={
              <ProtectedRoute requiredLevel={1}>
                <DailyPractice />
              </ProtectedRoute>
            }
          />

          {/* TRADE */}

          <Route
            path="trade"
            element={
              <ProtectedRoute requiredLevel={2}>
                <Trade />
              </ProtectedRoute>
            }
          />

          {/* PORTFOLIO */}

          <Route
            path="portfolio"
            element={
              <ProtectedRoute requiredLevel={2}>
                <Portfolio />
              </ProtectedRoute>
            }
          />

        </Route>
      )}

    </Routes>
  );
}

export default function App() {

  return (

    <div className="min-h-screen bg-[#0f172a] text-white antialiased">

      <Router>
        <AppRoutes />
      </Router>

    </div>
  );
}
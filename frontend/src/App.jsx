import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TradingProvider } from "./context/TradingContext";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Trade from "./pages/Trade";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Learn from "./pages/Learn";

const App = () => {
  return (
    <AuthProvider>
      <TradingProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>

              {/* Public Routes */}
              <Route index element={<Dashboard />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="learn" element={<Learn />} />

              {/* Demo Trading - Requires Level 2 */}
              <Route
                path="trade"
                element={
                  <ProtectedRoute requiredLevel={2}>
                    <Trade />
                  </ProtectedRoute>
                }
              />

              {/* Portfolio - Also Level 2 (optional, can change) */}
              <Route
                path="portfolio"
                element={
                  <ProtectedRoute requiredLevel={2}>
                    <Portfolio />
                  </ProtectedRoute>
                }
              />

              {/* Example Live Trading Route (if you create it later) */}
              {/*
              <Route
                path="live"
                element={
                  <ProtectedRoute requiredLevel={3}>
                    <LiveTrading />
                  </ProtectedRoute>
                }
              />
              */}

            </Route>
          </Routes>
        </Router>
      </TradingProvider>
    </AuthProvider>
  );
};

export default App;
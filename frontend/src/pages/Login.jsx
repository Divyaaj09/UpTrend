// src/pages/Login.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220] text-white">
      <div className="w-full max-w-md bg-[#121a2b] p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

        {error && (
          <div className="bg-red-500/20 text-red-400 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        <button
          onClick={handleGoogle}
          className="w-full mb-4 bg-white text-black py-2 rounded-lg font-semibold hover:opacity-90"
        >
          Continue with Google
        </button>

        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-gray-600" />
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-600" />
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-[#1b2437] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-[#1b2437] outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
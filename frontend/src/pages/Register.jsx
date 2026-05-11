// src/pages/Register.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220] text-white">
      <div className="w-full max-w-md bg-[#121a2b] p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

        {error && (
          <div className="bg-red-500/20 text-red-400 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
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

          <button className="bg-green-600 py-3 rounded-lg font-semibold hover:bg-green-700">
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
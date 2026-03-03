import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register(username, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-2xl mb-4">Register</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <input
        className="w-full p-3 mb-4 bg-[#1E293B] rounded"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        className="w-full p-3 mb-4 bg-[#1E293B] rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleRegister}
        className="w-full bg-blue-500 p-3 rounded hover:bg-blue-600"
      >
        Create Account
      </button>
    </div>
  );
};

export default Register;
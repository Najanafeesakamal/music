import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setMessage("Login Successful!");
    localStorage.setItem("token", "demo-token");
    setTimeout(() => navigate("/home"), 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <p style={{ marginBottom: "30px", opacity: 0.8, textAlign: "center" }}>
          Welcome back! Log in to continue
        </p>

        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {message && (
          <div style={{ color: "#22c55e", margin: "10px 0", fontWeight: "bold" }}>
            {message}
          </div>
        )}

        <button onClick={handleLogin}>Login</button>

        <div className="auth-links">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
}
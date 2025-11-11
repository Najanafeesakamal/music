import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    setSuccess("Account created successfully!");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Account</h2>

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

        {error && <div style={{ color: "#f87171", marginBottom: "12px" }}>{error}</div>}
        {success && <div style={{ color: "#4ade80", marginBottom: "12px" }}>{success}</div>}

        <button onClick={handleSignup}>Create Account</button>

        <div className="auth-links">
          Already have an account? <a href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
}
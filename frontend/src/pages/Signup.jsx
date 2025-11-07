import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api";

export default function Signup() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      setError("");
      setSuccess("");
      await signup(form);
      setSuccess("✅ Account created successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
       
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          borderRadius: 20,
          padding: "40px 30px",
          width: "90%",
          maxWidth: 420,
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
            textShadow: "0 0 12px rgba(255,255,255,0.6)",
          }}
        >
          ✨ Create Your Account
        </h2>

        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: 10,
            marginBottom: "12px",
            border: "none",
            outline: "none",
            background: "rgba(255,255,255,0.2)",
            color: "#fff",
            fontSize: "1rem",
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: 10,
            marginBottom: "12px",
            border: "none",
            outline: "none",
            background: "rgba(255,255,255,0.2)",
            color: "#fff",
            fontSize: "1rem",
          }}
        />

        {error && (
          <div style={{ color: "#f87171", marginBottom: "12px" }}>{error}</div>
        )}
        {success && (
          <div style={{ color: "#4ade80", marginBottom: "12px" }}>
            {success}
          </div>
        )}

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={handleSignup}
            style={{
              flex: 1,
              padding: "12px 0",
              background:
                "linear-gradient(135deg, #10b981, #059669, #34d399)",
              color: "#fff",
              fontWeight: "600",
              border: "none",
              borderRadius: 12,
              cursor: "pointer",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.85")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            style={{
              flex: 1,
              padding: "12px 0",
              background: "rgba(255,255,255,0.25)",
              color: "#fff",
              fontWeight: "600",
              border: "none",
              borderRadius: 12,
              cursor: "pointer",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "rgba(255,255,255,0.4)")}
            onMouseOut={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.25)")
            }
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

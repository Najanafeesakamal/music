import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Simulate successful login
    setMessage("✅ Login Successful!");
    localStorage.setItem("token", "demo-token");

    // Navigate to home page after a short delay
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div
      style={{

        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "40px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "1.8rem" }}>Login</h2>
        <p style={{ marginBottom: "30px", opacity: 0.8 }}>
          Welcome back! Please log in to continue 🎵
        </p>

        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
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
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        />

        {message && (
          <div
            style={{
              color: "#22c55e",
              marginBottom: "15px",
              fontWeight: "bold",
            }}
          >
            {message}
          </div>
        )}

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            background: "linear-gradient(90deg, #4f46e5, #9333ea)",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "10px",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "2px solid #fff",
            background: "transparent",
            color: "#fff",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Create an Account
        </button>
      </div>
    </div>
  );
}

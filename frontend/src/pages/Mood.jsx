import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Mood() {
  const [mood, setMood] = useState("");
  const navigate = useNavigate();

  const moods = ["Happy 😊", "Chill 😌", "Sad 😢", "Energetic 💃"];

  const handleSubmit = () => {
    if (mood) {
      navigate(`/playlist/${encodeURIComponent(mood)}`);
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
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          borderRadius: 20,
          padding: "50px 30px",
          width: "90%",
          maxWidth: 500,
          textAlign: "center",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            textShadow: "0 0 15px rgba(255,255,255,0.6)",
          }}
        >
          🎵 What’s Your Mood Today?
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            marginBottom: "25px",
          }}
        >
          {moods.map((m, i) => (
            <button
              key={i}
              onClick={() => setMood(m)}
              style={{
                padding: "12px",
                borderRadius: 12,
                fontSize: "1rem",
                fontWeight: 600,
                background:
                  mood === m
                    ? "linear-gradient(135deg, #f9fafb, #dbeafe)"
                    : "rgba(255,255,255,0.25)",
                color: mood === m ? "#4338ca" : "#fff",
                border: "none",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
            >
              {m}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!mood}
          style={{
            padding: "12px 25px",
            borderRadius: 12,
            background: mood
              ? "linear-gradient(135deg, #34d399, #10b981)"
              : "rgba(255,255,255,0.25)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
            cursor: mood ? "pointer" : "not-allowed",
            transition: "0.3s ease",
          }}
        >
          Submit Mood
        </button>
      </div>
    </div>
  );
}

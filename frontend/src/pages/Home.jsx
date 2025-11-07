import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState("");
  const navigate = useNavigate();

  const handleAddSong = () => {
    if (newSong.trim() === "") return;
    setSongs([...songs, newSong]);
    setNewSong("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
          width: "90%",
          maxWidth: 500,
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          borderRadius: 20,
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
          padding: "40px 30px",
          textAlign: "center",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
          }}
        >
          🎵 My Playlist
        </h2>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            gap: 10,
            justifyContent: "center",
          }}
        >
          <input
            value={newSong}
            onChange={(e) => setNewSong(e.target.value)}
            placeholder="Enter a song name..."
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 10,
              border: "none",
              outline: "none",
              background: "rgba(255,255,255,0.9)",
              color: "#111",
              fontSize: "1rem",
            }}
          />
          <button
            onClick={handleAddSong}
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: 10,
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.8")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Add
          </button>
        </div>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: 30,
            maxHeight: 250,
            overflowY: "auto",
          }}
        >
          {songs.map((song, index) => (
            <li
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                margin: "10px 0",
                padding: "12px 16px",
                borderRadius: 12,
                textAlign: "left",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.3)";
                e.target.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.15)";
                e.target.style.transform = "scale(1)";
              }}
            >
              🎶 {song}
            </li>
          ))}
        </ul>

        <button
          onClick={handleLogout}
          style={{
            marginTop: 25,
            padding: "10px 20px",
            background: "linear-gradient(135deg, #f43b47, #453a94)",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.opacity = "0.85")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

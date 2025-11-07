import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function MoodPlaylist() {
  const { mood } = useParams();

  const playlists = {
    "Happy 😊": [
      { title: "Good Vibes", artist: "Chris J.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8wnWh90PgyRZfkh-Yd8DwDlfGU4uQJznuA&s" },
      { title: "Sunny Days", artist: "Rae M.", img: "data:image/jpeg;base64,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" },
      { title: "Smile Again", artist: "Jana L.", img: "https://i.scdn.co/image/ab67616d0000b273d64e2ec8c2a0f9b81856b2ef" },
    ],
    "Chill 😌": [
      { title: "Lo-Fi Dreams", artist: "Soft Mood", img: "https://i.scdn.co/image/ab67616d0000b273b3b1da45aab8a38dc9d9b60f" },
      { title: "Night Vibes", artist: "Kiro", img: "https://i.scdn.co/image/ab67616d0000b273a6f257f4c54b9a0e6b4c72d7" },
      { title: "Calm Flow", artist: "Oasis", img: "https://i.scdn.co/image/ab67616d0000b273a1d95aab1d6cb7275857b08c" },
    ],
    "Sad 😢": [
      { title: "Lost Feelings", artist: "Luna", img: "https://i.scdn.co/image/ab67616d0000b273cda34ad33a7e0e6c6a61b83e" },
      { title: "Rainy Nights", artist: "Echo", img: "https://i.scdn.co/image/ab67616d0000b273e6229c5baf7c9ab99f33d3a9" },
      { title: "Alone Again", artist: "Nova", img: "https://i.scdn.co/image/ab67616d0000b273d3188e0d9437fd8b1f4a4452" },
    ],
    "Energetic 💃": [
      { title: "Dance Fever", artist: "Neon Pulse", img: "https://i.scdn.co/image/ab67616d0000b273d9355420af3dc90edb9f6872" },
      { title: "Hype Zone", artist: "DJ Blaze", img: "https://i.scdn.co/image/ab67616d0000b273d64f7b3c933e246528d2324d" },
      { title: "Power Moves", artist: "Skyler", img: "https://i.scdn.co/image/ab67616d0000b27326d6b65ab73b4e66fa2c4118" },
    ],
  };

  const songs = playlists[mood] || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        padding: "50px 20px",
      }}
    >
      <Link
        to="/mood"
        style={{
          color: "#10b981",
          textDecoration: "none",
          fontWeight: "bold",
          marginBottom: "20px",
          display: "inline-block",
        }}
      >
        ← Back to Moods
      </Link>

      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          textShadow: "0 0 15px rgba(255,255,255,0.6)",
        }}
      >
        🎧 {mood} Playlist
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "35px",
          justifyItems: "center",
        }}
      >
        {songs.map((song, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 15,
              width: 220,
              textAlign: "center",
              boxShadow: "0 4px 25px rgba(0,0,0,0.3)",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >
            <motion.img
              src={song.img}
              alt={song.title}
              style={{
                width: "100%",
                borderRadius: 14,
                marginBottom: 10,
                boxShadow: "0 0 20px rgba(0,255,150,0.2)",
              }}
              whileHover={{ scale: 1.05 }}
            />

            {/* Floating Play Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(16,185,129,0.9)",
                borderRadius: "50%",
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 0 25px rgba(16,185,129,0.8)",
              }}
            >
              <Play size={28} />
            </motion.div>

            <h3 style={{ fontSize: "1.1rem", margin: "10px 0 5px" }}>
              {song.title}
            </h3>
            <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>{song.artist}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

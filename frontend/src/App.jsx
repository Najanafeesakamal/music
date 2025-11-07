import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Mood from "./pages/Mood";
import MoodPlaylist from "./pages/Moodplaylist"; // ✅ import the playlist page

export default function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>🎵 Music Playlist App</h1>

        {/* Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/signup" style={{ margin: "0 10px" }}>Signup</Link>
          <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
          <Link to="/home" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/mood" style={{ margin: "0 10px" }}>Mood</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/playlist/:mood" element={<MoodPlaylist />} /> {/* ✅ new route */}
        </Routes>
      </div>
    </Router>
  );
}

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Auth
export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);

// Playlists (token required)
export const getPlaylists = (token) =>
  API.get("/playlists", { headers: { Authorization: `Bearer ${token}` } });

export const createPlaylist = (data, token) =>
  API.post("/playlists", data, { headers: { Authorization: `Bearer ${token}` } });

export const addSongToPlaylist = (id, data, token) =>
  API.post(`/playlists/${id}/songs`, data, { headers: { Authorization: `Bearer ${token}` } });

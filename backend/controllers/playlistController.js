import Playlist from "../models/Playlist.js";

export const getPlaylists = async (req, res) => {
  const playlists = await Playlist.find({ userId: req.user.id });
  res.json(playlists);
};

export const createPlaylist = async (req, res) => {
  const playlist = new Playlist({
    name: req.body.name,
    songs: [],
    userId: req.user.id,
  });
  await playlist.save();
  res.status(201).json(playlist);
};

export const addSong = async (req, res) => {
  const { title, artist, link } = req.body;
  const playlist = await Playlist.findOne({ _id: req.params.id, userId: req.user.id });
  if (!playlist) return res.status(404).json({ message: "Playlist not found" });

  playlist.songs.push({ title, artist, link });
  await playlist.save();
  res.json(playlist);
};

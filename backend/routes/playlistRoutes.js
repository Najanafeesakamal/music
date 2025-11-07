import express from "express";
import {
  getPlaylists,
  createPlaylist,
  addSong,
} from "../controllers/playlistController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getPlaylists);
router.post("/", verifyToken, createPlaylist);
router.post("/:id/songs", verifyToken, addSong);

export default router;

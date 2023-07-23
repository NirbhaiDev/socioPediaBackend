import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id", verifyToken, getUserFriends);

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;

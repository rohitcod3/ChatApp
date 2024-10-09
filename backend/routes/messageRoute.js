import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";  
const router = express.Router();

router.route("/send/:id").post(isAuthenticated,sendMessage);
// router.route('/send/:id', isAuthenticated, sendMessage);
export default router;
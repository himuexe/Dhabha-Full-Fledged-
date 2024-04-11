import express from "express";
import MyUserController from "../controllers/MyUserController";
const router = express.Router();
// post request => MyUserController
router.post("/", MyUserController.createCurrentUser);
export default router;
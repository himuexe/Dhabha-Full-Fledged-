import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";
const router = express.Router();
// post request => MyUserController
router.post("/",jwtCheck, MyUserController.createCurrentUser); // jwtcheck => middleware=> auth
export default router;
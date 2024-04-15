import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
const router = express.Router();
// post request => MyUserController
router.post("/",jwtCheck, MyUserController.createCurrentUser); // jwtcheck => middleware=> auth
router.put("/",jwtCheck, jwtParse, validateMyUserRequest, MyUserController.updateCurrentUser);
export default router;
import express from 'express';
import {regValidation, loginValidation} from "../schema/formValidation.js";
import userAuthValidation from "../middlewares/userAuthValidation.js";
import {registerUser, loginUser} from "../controllers/userController.js";

const router = express.Router(); // create a router object
router.post("/register",userAuthValidation(regValidation), registerUser);

router.post("/login",userAuthValidation(loginValidation), loginUser);

export default router;
import express from 'express';

const router = express.Router(); 

import {regValidation, loginValidation} from "../schema/formValidation.js";

import userAuthValidation from "../middlewares/userAuthValidation.js";

import {registerUser, loginUser} from "../controllers/userController.js";

router.post("/register",userAuthValidation(regValidation), registerUser);

router.post("/login",userAuthValidation(loginValidation), loginUser);

export default router;
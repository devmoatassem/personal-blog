import express from "express";
import {regValidation, loginValidation} from "../backend/schema/formValidation.js";
import userAuthValidation from "../backend/middlewares/userAuthValidation.js";

const server = new express();

const PORT = 8000;

server.use(express.json());

server.post("/register",userAuthValidation(regValidation), (req,res)=>{

    res.send("Sign up route");
    // const { fullname, email, password } = req.body;
})

server.post("/login",userAuthValidation(loginValidation), (req,res)=>{
    res.send("Login up route");
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
import express from "express";
import "dotenv/config.js";
import connectDB from "./config/dbConnection.js";


connectDB(); // connect to the database
const server = new express();

const PORT = 8000;

server.use(express.json());

// Use the user routes
// server.use('/api/users', userRoutes);

// server.post("/register",userAuthValidation(regValidation), (req,res)=>{

//     res.send("Sign up route");
//     // const { fullname, email, password } = req.body;
// })

// server.post("/login",userAuthValidation(loginValidation), (req,res)=>{
//     res.send("Login up route");
// })

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
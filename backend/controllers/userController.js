import User from "../schema/dbSchema/User.js";
import bcrypt from "bcrypt";

import usernameGenerator from "../utilities/usernameGenerator.js";

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  const hashed_password = await bcrypt.hash(password, 10);
  const username = await usernameGenerator(email);
  const user = new User({
    personal_info :{
        fullname,
    email,
    password: hashed_password,
    username,
    }
    
  });
  user
    .save()
    .then((user) => {
      res.status(201).json({
        u: user,
      });
    })
    .catch((err) => {
        if(err.code === 11000){
            return res.status(500).json({
                error: "Email already exists"
            })
        }
      res.status(500).json({
        error: err.message,
      });
    });
};


// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
};


export { registerUser, loginUser };
import User from "../schema/dbSchema/User.js";
import bcrypt from "bcrypt";

import usernameGenerator from "../utilities/usernameGenerator.js";
import { dataFormatToSend } from "../utilities/dataFormatToSend.js";

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  const hashed_password = await bcrypt.hash(password, 10);
  const username = await usernameGenerator(email);
  const user = new User({
    personal_info: {
      fullname,
      email,
      password: hashed_password,
      username,
    },
  });
  user
    .save()
    .then((user) => {
      res.status(201).json(dataFormatToSend(user));
    })
    .catch((err) => {
      if (err.code === 11000) {
        return res.status(500).json({
          error: "Email already exists",
        });
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
  User.findOne({ "personal_info.email": email })
    .then((user) => {
      if (user) {
        bcrypt
          .compare(password, user.personal_info.password)
          .then((isMatch) => {
            if (isMatch) {
              res.status(200).json(dataFormatToSend(user));
            } else {
              res.status(401).json({
                error: "Invalid credentials",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              error: err.message,
            });
          });
      } else {
        res.status(404).json({
          error: "User not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};

export { registerUser, loginUser };

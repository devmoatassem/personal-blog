import express from "express";
import {
  getLatesBlogs,
  getTrendingBlogs,
} from "../controllers/homePageControllers.js";

const router = express.Router(); // create a router object

// parent route is /blogs
router.get("/latest", getLatesBlogs);
router.get("/trending", getTrendingBlogs);
export default router;

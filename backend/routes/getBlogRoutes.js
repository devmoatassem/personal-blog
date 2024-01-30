import express from "express";
import { getLatesBlogs } from "../controllers/homePageControllers.js";

const router = express.Router(); // create a router object


// parent route is /blogs
router.get("/latest", getLatesBlogs);

export default router;

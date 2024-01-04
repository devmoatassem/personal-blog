import express from "express";
import { getUploadURL } from "../controllers/awsS3Controller.js";

const router = express.Router(); // create a router object

router.get("/getUploadURL", getUploadURL);

export default router;
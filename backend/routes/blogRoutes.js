import express from "express";
import { getUploadURL } from "../controllers/awsS3Controller.js";
import { authHandling } from "../middlewares/authHandling.js";

const router = express.Router(); // create a router object

router.use(authHandling);
router.get("/getUploadURL", getUploadURL);

export default router;

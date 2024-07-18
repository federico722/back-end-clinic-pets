import express from "express";
import updateProfile from "../controllers/profile-controller";
import verifyToken from "../middlewere/VerifyToken";

const router = express.Router();

router.put('/',  verifyToken, updateProfile);

export default router;
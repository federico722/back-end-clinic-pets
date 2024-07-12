import express from "express";
import registerVeterinaryController from "../controllers/registerVeterinary-controller";
const router = express.Router();


router.post('/', registerVeterinaryController);

export default router;


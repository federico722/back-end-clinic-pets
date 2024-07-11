import express from "express";
import scheduleController from "../controllers/scheduleAppointment-controller";
const router = express.Router();


router.post('/', scheduleController);


export default router;
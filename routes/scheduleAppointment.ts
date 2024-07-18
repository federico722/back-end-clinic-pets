import express from "express";
import verifyToken from "../middlewere/VerifyToken";
import scheduleController from "../controllers/scheduleAppointment-controller";
const router = express.Router();


router.post('/', verifyToken, scheduleController);


export default router;
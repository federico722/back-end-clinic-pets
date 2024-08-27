import Express from "express";
import verifyToken from "../middlewere/VerifyToken";
import createHistoryMedical from "../controllers/controllers-veterinary/createHistorial-controller";

const router = Express.Router();

router.post('/', verifyToken, createHistoryMedical);

export default router;
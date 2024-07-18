import express from "express";
import registerVeterinaryController from "../controllers/registerVeterinary-controller";
import { validatorVeterinary, validatorsParamsVeterinary} from "../middlewere/registerVeterinary-validator";
const router = express.Router();


router.post('/', validatorsParamsVeterinary, validatorVeterinary, registerVeterinaryController);

export default router;


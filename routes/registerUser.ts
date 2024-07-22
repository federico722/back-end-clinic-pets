import express from "express";
import registerController from '../controllers/registerUser-controller';
import { validator, validatorParams } from "../middlewere/registerUser-validator";

const router = express.Router();


router.post('/', validatorParams, validator, registerController );


export default router;
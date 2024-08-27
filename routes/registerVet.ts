import  Express  from "express";
import registerVeterinary from "../controllers/controllers-admin/registerVet-controllers";
import { validator, validatorParams } from "../middlewere/registerVet-validator";

const router = Express.Router();

router.post('/', validatorParams, validator, registerVeterinary);


export default router;
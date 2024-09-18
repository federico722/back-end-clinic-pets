import  Express  from "express";
import callAllData from "../controllers/controllers-admin/callAllDataUser-controllers";
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();

router.get('', verifyToken, callAllData);

export default router
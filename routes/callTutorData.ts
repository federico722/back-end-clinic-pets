import  Express  from "express";
import callTutorData from "../controllers/callTutorData-controllers";
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();

router.get('/', verifyToken, callTutorData);

export default router;
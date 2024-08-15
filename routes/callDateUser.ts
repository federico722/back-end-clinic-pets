import  Express  from "express";
import callDateController from '../controllers/controllers--user/callDateUser-controllers';
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();


router.get('/', verifyToken, callDateController);

export default router; 



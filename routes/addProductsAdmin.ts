import  Express  from "express";
import uploadProduct from "../controllers/controllers-admin/addProducts-controllers";
import verifyToken from "../middlewere/VerifyToken";


const router = Express.Router();

router.post('/', verifyToken, uploadProduct);

export default router;
import Express from "express";
import updateProduct from "../controllers/controllers-admin/updateProducts-controllers";
import verifyToken from "../middlewere/VerifyToken";


const router = Express.Router();

router.put('/:productId', verifyToken, updateProduct);

export default router;
import Express from "express";
import deleteProductCart from "../controllers/controllers--user/deleteProductCart-controllers";
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();

router.delete('', verifyToken, deleteProductCart);  

export default router;
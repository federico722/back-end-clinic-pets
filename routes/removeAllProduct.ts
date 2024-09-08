import Express from "express";
import removeAllProduct from "../controllers/controllers--user/removeAllProduct-controllers";
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();

router.delete('', verifyToken, removeAllProduct);

export default router;
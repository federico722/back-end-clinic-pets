import Express from "express";
import verifyToken from "../middlewere/VerifyToken";
import addProductsCartUser from "../controllers/controllers--user/addProductCart-controllers";

const router = Express.Router();

router.post('/', verifyToken, addProductsCartUser);

export default router;

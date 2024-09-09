import Express from "express";
import verifyToken from "../middlewere/VerifyToken";
import updateProductCart from "../controllers/controllers--user/updateCartProductUser-controllers";

const router = Express.Router();

router.put('/:IdUsuarioProducto', verifyToken, updateProductCart);

export default router;
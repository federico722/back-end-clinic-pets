import Express from "express";
import deleteProduct from "../controllers/controllers-admin/deleteProduct-controllers";
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();

router.delete('/:IdProducto',verifyToken, deleteProduct);

export default router;
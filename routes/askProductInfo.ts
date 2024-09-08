import Express from "express";
import askProductInfo from "../controllers/controllers-admin/askProductInfo-controllers";
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();

router.get('/:IdProducto', verifyToken, askProductInfo )

export default router;
import  Express  from "express";
import uploadProductId from "../controllers/controllers-admin/uploadProductId";
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();

router.get('/:IdProducto', verifyToken, uploadProductId);

export default router;
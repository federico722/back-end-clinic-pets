import Express from "express";
import verifyToken from "../middlewere/VerifyToken";
import deletePetVerify from "../controllers/controllers-admin/deletePetVerify-controllers";

const router = Express.Router();

router.delete('/:IdAdopcionMascota', verifyToken, deletePetVerify);

export default router;

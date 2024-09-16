import Express from "express";
import deletePet from "../controllers/controllers-admin/deletePets-controllers";
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();
router.delete('/:IdAdopcionMascota', verifyToken, deletePet);

export default router;


import Express from "express";
import verifyToken from "../middlewere/VerifyToken";
import updatePetVerify from "../controllers/controllers-admin/updatePetVerify-controllers";

const router = Express.Router();

router.put('/:IdAdopcionMascota',updatePetVerify);

export default router;

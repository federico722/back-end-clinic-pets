import Express from "express";
import verifyToken from "../middlewere/VerifyToken";
import uploadPetId from "../controllers/controllers--user/uploadPetId-controllers";

const router = Express.Router();

router.get('/:IdAdopcionMascota', verifyToken, uploadPetId);

export default router;


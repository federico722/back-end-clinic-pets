import Express from "express";
import verifyToken from "../middlewere/VerifyToken";
import callPetVerify from "../controllers/controllers-admin/callPetVerify-controllers";

const router = Express.Router();

router.get('', verifyToken, callPetVerify);

export default router;
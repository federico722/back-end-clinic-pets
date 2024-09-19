import Express  from "express";
import verifyToken from "../middlewere/VerifyToken";
import traerMascotasPerdidas from "../controllers/cardsPetsPerdidas-controller";

const router = Express.Router();

router.get('/', traerMascotasPerdidas);

export default router;


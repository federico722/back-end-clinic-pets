import Express  from "express";
import verifyToken from "../middlewere/VerifyToken";
import obtenerId from "../controllers/obtenerId-controller";

const router = Express.Router();

router.get('/', verifyToken, obtenerId);

export default router;


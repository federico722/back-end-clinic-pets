import  express  from "express";
import verifyRol from "../controllers/verifyRol-controllers";
import verifyToken from "../middlewere/VerifyToken";

const router = express.Router();

router.get('/', verifyToken, verifyRol);

export default router;
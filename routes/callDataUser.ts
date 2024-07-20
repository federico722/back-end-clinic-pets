import Express  from "express";
import callDataController from "../controllers/callDataUser-controllers"
import verifyToken from "../middlewere/VerifyToken";
const router = Express.Router();

router.get('/',verifyToken, callDataController );

export default router;

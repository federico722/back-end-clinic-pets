import Express  from "express";
import verifyToken from "../middlewere/VerifyToken";
import ids from "../controllers/controllers-veterinary/getIds";

const router = Express.Router();

router.get('/', verifyToken, ids);

export default router;


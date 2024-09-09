import Express  from "express";
import verifyToken from "../middlewere/VerifyToken";
import callCardsPets from "../controllers/controllers--user/callCardsPets-controllers";

const router = Express.Router();

router.get('', verifyToken, callCardsPets);

export default router;


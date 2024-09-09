import Express from "express";
import verifyToken from "../middlewere/VerifyToken";
import uploadProductUser from "../controllers/controllers--user/uploadProductUser-controller";

const router = Express.Router();

router.get('', verifyToken, uploadProductUser);

export default router;
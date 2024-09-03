import Express from "express";
import updatePets from "../controllers/controllers--user/updatePets-controllers";
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();

router.put("",verifyToken, updatePets );

export default router; 


import  Express  from "express";
import AskForAllPets from "../controllers/controllers--user/askForAllPets-controllers";
import verifyToken from "../middlewere/VerifyToken";

const router = Express.Router();

router.get('', verifyToken, AskForAllPets);

export default router


import  Express  from "express";
import verifyToken from "../middlewere/VerifyToken";
import addPetUser from "../controllers/controllers--user/addPets-controllers";

const router = Express.Router();

router.post('/', verifyToken, addPetUser );

export default router;
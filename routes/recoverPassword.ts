import Express  from "express";
import recoverPassword from "../controllers/recoverPassword-controllers";

const router = Express.Router();

router.post('/', recoverPassword);


export default router
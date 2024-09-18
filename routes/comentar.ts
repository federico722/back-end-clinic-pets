import  Express  from "express";
import verifyToken from "../middlewere/VerifyToken";
import comentario from "../controllers/comentarios-controller";

const router = Express.Router();

router.post('/', verifyToken, comentario );

export default router;
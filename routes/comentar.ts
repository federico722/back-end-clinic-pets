import  Express  from "express";
import verifyToken from "../middlewere/VerifyToken";
import comentario from "../controllers/comentarios-controller";

const router = Express.Router();

router.post('/', comentario );

export default router;
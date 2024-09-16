import Express  from "express";
import verifyToken from "../middlewere/VerifyToken";
import getComentarios from "../controllers/getComentarios-controller";

const router = Express.Router();

router.get('/:IdBuscarMascota', getComentarios);

export default router;


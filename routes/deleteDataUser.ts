import Express from "express";
import DeleteDataUser from "../controllers/deleteDataUser-controller";

const router = Express.Router();

router.delete('/:idCita',DeleteDataUser)

export default router;
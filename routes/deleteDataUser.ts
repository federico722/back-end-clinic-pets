import Express from "express";
import DeleteDataUser from "../controllers/controllers--user/deleteDataUser-controller";

const router = Express.Router();

router.delete('/:idCita',DeleteDataUser)

export default router;
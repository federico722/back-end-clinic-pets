import Express from "express";
import updateAppointment from "../controllers/updateAppointment";

const router = Express.Router();

router.put("/:idCita", updateAppointment);

export default router;

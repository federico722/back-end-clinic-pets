import Express from "express";
import updateAppointment from "../controllers/controllers--user/updateAppointment";

const router = Express.Router();

router.put("/:idCita", updateAppointment);

export default router;

import Express from "express";
import getAppointmentDay from "../controllers/controllers-veterinary/getAppointmenDaysVet-controller";

const router = Express.Router();

router.get('/:fecha', getAppointmentDay)
    
export default router;
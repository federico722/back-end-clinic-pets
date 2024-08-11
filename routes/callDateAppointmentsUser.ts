import  Express  from "express";
import callDateAppointment from "../controllers/callDateAppointment-controller";

const router = Express.Router();

router.get('/:date', callDateAppointment)
    
   

export default router;

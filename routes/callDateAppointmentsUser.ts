import  Express  from "express";
import callDateAppointment from "../controllers/controllers--user/callDateAppointment-controller";

const router = Express.Router();

router.get('/:date', callDateAppointment)
    
   

export default router;

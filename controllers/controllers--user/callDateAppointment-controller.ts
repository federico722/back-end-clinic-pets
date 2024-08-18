import {Request, Response} from "express";
import UserService from "../../services/userServices";
import CallDateAppointment from "../../Dto/Dto-User/callDateAppointmentDto";

let callDateAppointment = async (req: Request, res: Response) =>{
    try {
        const { date } = req.params;
        console.log('dates', date);
        
        const appointments = await UserService.callDateAppointment(new CallDateAppointment(date));
        console.log('Appointments:', appointments); 

        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export default callDateAppointment;
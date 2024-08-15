import { Request, Response } from "express";
import VeterinaryService from "../../services/VeterinaryServices";
import GetAppointment from "../../Dto/Dto-Veterinary/GetAppointmentVeterinary";

let getAppointmentDay = async (req: Request, res: Response) => {
    try {
        const {fecha} = req.params
        const newScheduleAppointment = await VeterinaryService.getAppointments(new GetAppointment(fecha));
        console.log(newScheduleAppointment);
        res.status(200).json({ message: 'Citas consultadas con exito' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export default getAppointmentDay;
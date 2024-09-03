import { Request, Response } from "express";
import UpdateAppointment from "../../Dto/Dto-User/UpdateAppointmentDto";
import CancelAppointment from "../../Dto/Dto-User/cancelAppointmentDto";
import UserService from "../../services/userServices";


const updateAppointment = async(req: Request, res: Response) => {
    try {
        const { idCita } = req.params;
        const { fecha, hora, estado } = req.body;
        console.log('datos recibidos', fecha, hora);

        if (estado === 'Cancelada') {
            await UserService.cancelAppointment(new CancelAppointment(idCita, estado));
        } else {
            await UserService.updateAppointment(new UpdateAppointment(idCita, fecha, hora));
        }
        res.status(200).json({ message: 'Cita actualizada con éxito' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export default updateAppointment; 

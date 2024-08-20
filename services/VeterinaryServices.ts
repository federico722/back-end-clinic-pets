import VeterinaryRepository from "../repositories/VeterinaryRepository";
import GetAppointment from "../Dto/Dto-Veterinary/GetAppointmentVeterinary";
import CreateHistorial from "../Dto/Dto-Veterinary/createHistorialDto";


class VeterinaryService {
    static async getAppointments(fecha: GetAppointment) {
        return await VeterinaryRepository.getAppointment(fecha)
    }

    static async createHistorial(createHistorial: CreateHistorial){
        return await VeterinaryRepository.createHistorial(createHistorial); 
    }
}

export default VeterinaryService;
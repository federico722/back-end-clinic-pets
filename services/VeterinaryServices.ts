import VeterinaryRepository from "../repositories/VeterinaryRepository";
import GetAppointment from "../Dto/Dto-Veterinary/GetAppointmentVeterinary";


class VeterinaryService {
    static async getAppointments(fecha: GetAppointment) {
        return await VeterinaryRepository.getAppointment(fecha)
    }
}

export default VeterinaryService;
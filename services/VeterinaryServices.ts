import VeterinaryRepository from "../repositories/VeterinaryRepository";
import GetAppointment from "../Dto/Dto-Veterinary/GetAppointmentVeterinary";
import CreateHistorial from "../Dto/Dto-Veterinary/createHistorialDto";
import Veterinary from "../Dto/Dto-Veterinary/registerVeterinaryDto";
import generateHash from "../Helpers/generateHash";


class VeterinaryService {
    static async getAppointments(fecha: GetAppointment) {
        return await VeterinaryRepository.getAppointment(fecha)
    }

    static async createHistorial(createHistorial: CreateHistorial){
        return await VeterinaryRepository.createHistorial(createHistorial); 
    }

    static async registerVeterinary(registerVet: Veterinary ){
        registerVet.contrasenia = await generateHash(registerVet.contrasenia);
        return await  VeterinaryRepository.addVeterinary(registerVet);
    }
}

export default VeterinaryService;
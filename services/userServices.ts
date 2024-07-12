import User from '../Dto/UserDto';
import Auth from '../Dto/authDto';
import Veterinary from '../Dto/veterinaryDto';
import generateHash from '../Helpers/generateHash';
import Schedule from '../Dto/ScheduleAppointmentDto';
import UserRepository from '../repositories/UserRepository';

class UserService {
    static async register(user: User){
        user.contrasenia = await generateHash(user.contrasenia);
        return  await UserRepository.add(user);
    }

    

    static async login(auth: Auth) {
        return await UserRepository.login(auth);
    }

    static async scheduleAppointment(schedule: Schedule) {
        return await UserRepository.scheduleAppointment(schedule);
    }

    static async registerVeterinary(veterinary: Veterinary){
        return await UserRepository.addVeterinary(veterinary);
 }
}

export default UserService
import User from '../Dto/UserDto';
import Auth from '../Dto/authDto';
import Schedule from '../Dto/ScheduleAppointmentDto';
import generateHash from '../Helpers/generateHash';
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
}

export default UserService
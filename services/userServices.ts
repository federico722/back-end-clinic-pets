import User from '../Dto/userDto';
import Auth from '../Dto/authDto';
import Profile from '../Dto/editProfileDto';
import CallDataUser from '../Dto/callDataUserDto';
import CallDateUser from '../Dto/callDateUserDto';
import DeleteDataUser from '../Dto/deleteDataUserDto'
import Veterinary from '../Dto/veterinaryDto';
import generateHash from '../Helpers/generateHash';
import Schedule from '../Dto/scheduleAppointmentDto';
import VerifyRol from '../Dto/verifyRol';
import UserRepository from '../repositories/UserRepository';
import CallDateAppointment from '../Dto/callDateAppointmentDto';
import UpdateAppointment from '../Dto/UpdateAppointmentDto';
import CancelAppointment from '../Dto/cancelAppointmentDto';
class UserService {
    static async register(user: User){
        user.contrasenia = await generateHash(user.contrasenia);
        return  await UserRepository.add(user);
        
        //return  await UserRepository.addAdmin(user);
        //return  await UserRepository.addAdmin(user);
    }

    static async login(auth: Auth) {
        return await UserRepository.login(auth);
    }

    static async verifyRolUser( verifyRol: VerifyRol){
        return await UserRepository.verifyRol(verifyRol);
    }

    static async scheduleAppointment(schedule: Schedule) {
        return await UserRepository.scheduleAppointment(schedule);
    }

    static async updateAppointment(update: UpdateAppointment) {
        try {
            return await UserRepository.updateAppointment(update);
        } catch (error) {
            throw error;
        }
    }

    static async cancelAppointment(update: CancelAppointment) {
        try {
            return await UserRepository.cancelAppointment(update);
        } catch (error) {
            throw error;
        }
    }

    static async registerVeterinary(veterinary: Veterinary){
        return await UserRepository.addVeterinary(veterinary);
    }

    static async updateProfile(profile: Profile) {
        try {
            return await UserRepository.updateProfile(profile);
        } catch (error) {
            throw error;
        }
    }

    static async  callDataUser(callDataUser: CallDataUser){
         try {
            return await UserRepository.callDataUser(callDataUser);
         } catch (error) {
            throw error;
         }
    }

    static async callDateUser(callDateUser: CallDateUser){
        try {
           return await UserRepository.callDateUser(callDateUser);
        } catch (error) {
            throw error;
        }
    }

    static async callDateAppointment(date: CallDateAppointment){
        try {
           return await UserRepository.getAppointmentsByDate(date);
        } catch (error) {
            throw error;
        }
    }



    static async deleteDataUser(deleteDataUser: DeleteDataUser){
        try {
            return await UserRepository.deleteDataUser(deleteDataUser);
        } catch (error) {
            throw error;
        }
    }

}

   

export default UserService


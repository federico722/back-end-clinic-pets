import User from '../Dto/Dto-User/userDto';
import Auth from '../Dto/authDto';
import Profile from '../Dto/editProfileDto';
import CallDataUser from '../Dto/Dto-User/callDataUserDto';
import CallDateUser from '../Dto/Dto-User/callDateUserDto';
import DeleteDataUser from '../Dto/Dto-User/deleteDataUserDto'
import Veterinary from '../Dto/Dto-Admin/veterinaryDto';
import generateHash from '../Helpers/generateHash';
import Schedule from '../Dto/Dto-User/scheduleAppointmentDto';
import VerifyRol from '../Dto/verifyRol';
import callTutorData from '../Dto/callTutorData';
import UserRepository from '../repositories/UserRepository';
import CallDateAppointment from '../Dto/Dto-User/callDateAppointmentDto';
import UpdateAppointment from '../Dto/Dto-User/UpdateAppointmentDto';
import CancelAppointment from '../Dto/Dto-User/cancelAppointmentDto';
import RecoverPassword from '../Dto/recoverPasswordDto';
import AddProductCart from '../Dto/Dto-User/addProductCartDto';
import AddPet from '../Dto/Dto-User/addPetDto';
import DeleteProductCart from '../Dto/Dto-User/deleteProductCartDto';
import RemoveAllProducts from '../Dto/Dto-User/removeAllProductDto';
import UpdatePets from '../Dto/Dto-User/updatePetsDto';
import UploadProductUser from '../Dto/Dto-User/uploadProductUserDto';
import UpdateProductCart from '../Dto/Dto-User/updateProductCartDto';
import UploadPetId from '../Dto/Dto-User/uploadPetIdDto';

class UserService {
    static async register(user: User){
        user.contrasenia = await generateHash(user.contrasenia); 
       return  await UserRepository.add(user);
        
        
       // return  await UserRepository.addAdmin(user);
    }

    static async recover(recoverPassword: RecoverPassword ) {
        recoverPassword.contrasenaUsuario = await generateHash(recoverPassword.contrasenaUsuario);
        return await UserRepository.recover(recoverPassword);
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

    /*static async registerVeterinary(veterinary: Veterinary){
        return await UserRepository.addVeterinary(veterinary);
    }*/

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

    static async callTutorData(callDataTutor: callTutorData){

        return await UserRepository.callTutorData(callDataTutor);
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

    static async addProductCart(addProduct: AddProductCart){
        return await UserRepository.addProductCart(addProduct);
    }

    static async addPetUser(addPet: AddPet){
        return await UserRepository.addPets(addPet);
    }

    static async deleteProductCart(deleteProductCart: DeleteProductCart){
        return await UserRepository.deleteProductCartUser(deleteProductCart);
    }

    static async removeAllProducts(removeAllProducts: RemoveAllProducts){
        return await UserRepository.removeAllProduct(removeAllProducts);
    }

    static async askForAllPets(){
        return await UserRepository.askForAllPets();
    }

                static async updatePets(updatePets: UpdatePets){
                    return await UserRepository.updatePets(updatePets);
                }

                static async uploadProductUser(uploadProductUser: UploadProductUser){
                    return await UserRepository.uploadProductUser(uploadProductUser);
                }

                static async updateProductCart(updateCart: UpdateProductCart){
                    return await UserRepository.updateProductCart(updateCart);
                }

                static async callCardsPets(){
                    return await UserRepository.callCardsPets();
                }

    static async uploadPetId(uploadPetId: UploadPetId){
        return await UserRepository.uploadPetId(uploadPetId);
    }

}

   

export default UserService


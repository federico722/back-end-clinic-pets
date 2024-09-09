import UploadProducts from "../Dto/Dto-Admin/uploadProductsDto";
import DeleteProduct from "../Dto/Dto-Admin/deleteProductDto";
import UploadProductId from "../Dto/Dto-Admin/uploadProductIdDto";
import VeterinaryStatus from "../Dto/Dto-Admin/veterinaryStatusDto";
import AdminRepository from "../repositories/AdminRepository";

class AdminServices {
   
    static async uploadProducts(uploadProducts: UploadProducts){
        return await AdminRepository.addProducts(uploadProducts);
    }

    static async askForAllProducts(){
        return await AdminRepository.askAllForProducts();
    }

    static async deleteProduct(deleteProduct: DeleteProduct){
        return await AdminRepository.deleteProduct(deleteProduct);
    }
    static async uploadProductId(uploadProductId: UploadProductId){
        return await AdminRepository.uploadProductId(uploadProductId);
    }
    
    static async veterinaryStatus(vetStatus: VeterinaryStatus) {
        return await AdminRepository.veterinaryStatus(vetStatus);
    }








    static async desactivateDay(date: any) {
        try {
            return await AdminRepository.desactivateDay(date);
        } catch (error) {
            throw error;
        }
    }

    // Desactivar una Hora
    static async desactivateTime(date: any, time: any) {
        try {
            return await AdminRepository.desactivateTime(date, time);
        } catch (error) {
            throw error;
        }
    }

    // Consultar Días Desactivados
    static async getDisabledDays() {
        try {
            return await AdminRepository.getDisabledDays();
        } catch (error) {
            throw error;
        }
    }

    // Consultar Horas Desactivadas
    static async getDisabledTimes() {
        try {
            return await AdminRepository.getDisabledTimes();
        } catch (error) {
            throw error;
        }
    }
}

export default AdminServices;
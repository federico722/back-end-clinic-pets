import UploadProducts from "../Dto/Dto-Admin/uploadProductsDto";
import VeterinaryStatus from "../Dto/Dto-Admin/veterinaryStatusDto";
import AdminRepository from "../repositories/AdminRepository";

class AdminServices {
   
    static async uploadProducts(uploadProducts: UploadProducts){
        return await AdminRepository.addProducts(uploadProducts);
    }

    static async veterinaryStatus(vetStatus: VeterinaryStatus) {
        return await AdminRepository.veterinaryStatus(vetStatus);
    }
    static async askForAllProducts(){
        return await AdminRepository.askAllForProducts();
    }
}

export default AdminServices;
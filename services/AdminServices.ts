import UploadProducts from "../Dto/Dto-Admin/uploadProductsDto";
import AdminRepository from "../repositories/AdminRepository";

class AdminServices {
   
    static async uploadProducts(uploadProducts: UploadProducts){
        return await AdminRepository.addProducts(uploadProducts);
    }

    static async askForAllProducts(){
        return await AdminRepository.askAllForProducts();
    }
}

export default AdminServices;
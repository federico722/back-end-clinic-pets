import UploadProducts from "../Dto/Dto-Admin/uploadProductsDto";
import AdminRepository from "../repositories/AdminRepository";

class AdminServices {
   
    static async uploadProducts(uploadProducts: UploadProducts){
        return await AdminRepository.addProducts(uploadProducts);
    }
}

export default AdminServices;
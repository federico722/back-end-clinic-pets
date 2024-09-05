import { Request, Response } from "express";
import UploadProductId from "../../Dto/Dto-Admin/uploadProductIdDto";
import AdminServices from "../../services/AdminServices";

let uploadProductId = async (req: Request, res: Response)=> {

    try {
        const {
            IdProducto
        } = req.body
    
        const uploadProductId: any = await AdminServices.uploadProductId(new UploadProductId(IdProducto));
    
        if (!uploadProductId.obtainedProduct) {
            return res.status(404).json({
                status: uploadProductId.status,
                message: 'error al obtener el producto',
                consult: uploadProductId.obtainedProduct
            });
        }
        
        return res.status(200).json({
            status: uploadProductId.status,
            Result: uploadProductId.result,
            consult: uploadProductId.obtainedProduct
        })
    } catch (error:any) {
        return res.status(500).json({
            status: 'Error en el servidor al hacer la consulta del producto',
            consult: false,
            error: error.message

        })
    }
}

export default uploadProductId;
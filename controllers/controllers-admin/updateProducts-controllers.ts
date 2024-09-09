import { Request, Response } from "express";
import UpdateProduct from "../../Dto/Dto-Admin/updateTiendaDto";
import AdminServices from "../../services/AdminServices";

let updateProduct = async (req:Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const {
            nombre,
            precio,
            cantidad,
            categoria,
            descripcion,
            informacion,
            seleccionTallaPresentacion,
            imagen
        } = req.body 
        
        const updateProduct: any = await AdminServices.updateProduct(new UpdateProduct(imagen, nombre, precio, descripcion, informacion, cantidad, categoria, seleccionTallaPresentacion, productId));

        console.log(updateProduct);
        

        if (!updateProduct.update) {
            return res.status(404).json({
                status: updateProduct.status,
                update: updateProduct.update
            })
        }

        return res.status(200).json({
            status: updateProduct.status,
            update: updateProduct.update
        })
        
    } catch (error: any) {
        return res.status(500).json({
            status: 'Error',
            update: false,
            error: error.message
        })
    }
}

export default updateProduct;
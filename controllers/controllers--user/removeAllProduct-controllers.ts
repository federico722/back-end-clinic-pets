import { Request, Response } from "express";
import UserRepository from "../../repositories/UserRepository";
import RemoveAllProduct from "../../Dto/Dto-User/removeAllProductDto";

const removeAllProduct = async (req:Request, res: Response) => {
    try {
        const IdUsuario = req.user?.id;

        if (typeof IdUsuario !== 'string' ) {
            return res.status(400).json({
              status: 'error',
              messege: 'User ID not found in token or has invalid type'
            });
           }
        
        const removeAllProduct: any = await UserRepository.removeAllProduct(new RemoveAllProduct(IdUsuario));
        console.log(removeAllProduct);
        

        if (!removeAllProduct.statusRemove) {
            return res.status(404).json({
                status: 'fallo la eliminacion del producto',
                message: removeAllProduct.status,
                delete: removeAllProduct.statusRemove
            })
        }

        return res.status(200).json({
            status: 'producto eliminado con exito',
            message: removeAllProduct.status,
            delete: removeAllProduct.statusRemove
        })

    } catch (error: any) {
        return res.status(500).json({
            status: 'fallo la eliminacion del producto del carrito',
            delete: false,
            error: error.message
        })
    }
}

export default removeAllProduct;
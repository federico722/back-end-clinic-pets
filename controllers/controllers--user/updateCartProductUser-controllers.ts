import { Request, Response } from "express";
import UpdateProductCart from "../../Dto/Dto-User/updateProductCartDto";
import UserService from "../../services/userServices";

/*let updateProductCart = async (req: Request, res: Response) => {
    try {
        const IdUsuarioProducto = req.params.IdUsuarioProducto;
        const {
            cantidad
        } = req.body

        const updateProductCart: any = await UserService.updateProductCart(new UpdateProductCart(IdUsuarioProducto, cantidad));

        console.log('returno updateProductCart:', updateProductCart.result);
        

        if (!updateProductCart.successfully) {
            return res.status(404).json({
                status: 'FAILED',
                message: updateProductCart.status,
                update: updateProductCart.successfully
            })
        }

    
        return res.status(200).json({
            status: 'Update succesfully',
            message: updateProductCart.status,
        })
    } catch (error: any) {
        console.error('error al actualizar el producto en el carrito', error);
        res.status(500).json({
            status: 'Error',
            message: 'error al actualizar la cantidad del producto del carrito',
            error: error.message
        })
        
    }
    
}

export default updateProductCart;*/
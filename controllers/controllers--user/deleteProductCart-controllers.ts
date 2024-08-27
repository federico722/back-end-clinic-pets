import { Request, Response } from "express";
import UserService from "../../services/userServices";
import DeleteProductCart from "../../Dto/Dto-User/deleteProductCartDto";

let deleteProductCart = async (req: Request, res: Response ) =>{
   
    try {

        const {
            IdProducto,
            nombreProducto
        } = req.body;
    
        console.log(`informacion traida del req: ${IdProducto}, ${nombreProducto}`);
    
        if (typeof IdProducto !== "string" && typeof nombreProducto !== "string") {
            return res.status(400).json({
                status: 'error delete',
                message: ' product id invalid or has invalid type'
            })
        }

        const deleteProductCart: any = await UserService.deleteProductCart( new DeleteProductCart(IdProducto, nombreProducto));
        console.log('datos del producto borrado', deleteProductCart);

        return res.status(200).json({
            status: 'success',
            message: deleteProductCart.status,
            statusDelete:  deleteProductCart.statusDelete
        });
           
    } catch (error:any) {
        console.error('error en la base de datos',error);
        return res.status(200).json({
            status: 'error',
            message: 'Failed to delete product from user product table',
            error: error.message
        });
    };
    
};

export default deleteProductCart;
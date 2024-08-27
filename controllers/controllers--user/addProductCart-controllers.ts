import { Request, Response } from "express";
import AddProductCart from "../../Dto/Dto-User/addProductCartDto";
import UserService from "../../services/userServices";

let addProductsCartUser = async (req: Request, res: Response) => {
    try { 

        // Extraer el ID de usuario de la solicitud
        const IdUsuario: any = req.user?.id;

        const {
            IdProducto,
            nombre,
            cantidad,
            precioUnitario,
            precioTotal
        } = req.body

        if ( typeof IdUsuario !== 'string') {
            return res.status(400).json({
              status: 'error',
              message: 'User ID not found in token or has invalid type'
            })
        }

        const addProductCart: any = await UserService.addProductCart( new AddProductCart(IdUsuario, IdProducto, nombre, precioUnitario, precioTotal, cantidad ));
        console.log('datos de los productos: ', addProductCart);

        if (!addProductCart.insertToCart) {
            return res.status(404).json({
                status: 'error',
                message: 'failed add product',
                error: addProductCart.errorSql
            });
        } ;

        return res.status(200).json({
            status: "success",
            message: addProductCart.status,
            insertProduct: addProductCart.insertToCart
        });
        

    } catch (error: any) {
        console.error('error en la insercion de los datos del producto',error);
        return res.status(500).json({
            status: 'error',
            message: 'Failed insert data',
            error: error.message
        });
    };
};


export default addProductsCartUser;
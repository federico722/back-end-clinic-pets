import { Request, Response } from "express";
import UploadProducts from "../../Dto/Dto-Admin/uploadProductsDto";
import AdminServices from "../../services/AdminServices";

let uploadProduct = async (req: Request, res: Response) => { 

    try {

    const {
        nombre,
        precio,
        cantidad,
        categoria,
        descripcion
    } = req.body

    const productoCreado: any = await AdminServices.uploadProducts(new UploadProducts(
        nombre,
        precio,
        descripcion,
        cantidad,
        categoria
    ));
    console.log('datos de los productos:',productoCreado);
    if (! productoCreado.insert) {
        return res.status(404).json({
            status: 'error',
            message: productoCreado.status,
            error: productoCreado.errorSql
        });
    }

    return res.status(200).json({
        status: 'success',
        consultation: productoCreado.insert,
        message: productoCreado.status
    })
        
    } catch (error: any ) {
        console.error('error al enviar la informacion a la tabla de productos', error);
        return res.status(500).json({
            status: 'error',
            message: 'Failed inserting data',
            error: error.message
        });
        
    }
    
}

export default uploadProduct;
import { Request, Response } from "express";
import DeleteProduct from "../../Dto/Dto-Admin/deleteProductDto";
import AdminServices from "../../services/AdminServices";

let deleteProduct = async (req: Request, res: Response) => {

    try {

    const IdProducto = req.params.IdProducto 
    const deleteProduct: any = await AdminServices.deleteProduct( new DeleteProduct(IdProducto));
    console.log(deleteProduct);
    

    if (!deleteProduct.deleteProduct) {
        return res.status(404).json({
            status: deleteProduct.status,
            consultSuccessful: deleteProduct.deleteProduct
        })
    }
     
      return res.status(200).json({
        status: deleteProduct.status,
        consultSuccessful: deleteProduct.deleteProduct
      })
    } catch (error: any) {
        return res.status(500).json({
            status: 'error',
            message: 'error en la consulta',
            error: error.message
        })
        
    }
}

export default deleteProduct;
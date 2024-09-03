import { Request, Response} from "express";
import AdminServices from "../../services/AdminServices";

let askForAllProducts = async (req: Request, res: Response) => {
  
    try {

        const askForAllProducts: any = await AdminServices.askForAllProducts();

        if (!askForAllProducts.consultProducts) {
            return res.status(404).json({
                status: askForAllProducts.status,
                consultProducts: askForAllProducts.consultProducts
            })
        }

        return res.status(200).json({
            Result: askForAllProducts.result
        })
        
    } catch (error: any) {
        console.error('error en la consulta de los productos', error);
        return res.status(500).json({
            status: 'error',
            message: 'failed consult data product',
            error: error.message
        })
        
    }

}

export default askForAllProducts;
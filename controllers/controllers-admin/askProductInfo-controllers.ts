import { Request, Response } from "express";
import AskProductInfo from "../../Dto/Dto-Admin/askProductInfoDto";
import AdminServices from "../../services/AdminServices";

let askProductInfo = async (req: Request, res: Response) => {
    try {
        const IdProducto = req.params.IdProducto;

        const askProductInfo: any = await AdminServices.askProductInfo(new AskProductInfo(IdProducto));
        console.log(askProductInfo);
        

        if (! askProductInfo.select) {
            return res.status(404).json({
                status: 'failed',
                message: askProductInfo.status,
                select: askProductInfo.select    
            })
        }

        return res.status(200).json({
            status: 'successs',
            message: askProductInfo.status,
            Result: askProductInfo.result
        })

    } catch (error: any) {
        console.error('error en el servidor',error);
        res.status(500).json({
            status: 'Error',
            message: 'error en el servidor ',
            error: error.message
        })
    }
}

export default askProductInfo;
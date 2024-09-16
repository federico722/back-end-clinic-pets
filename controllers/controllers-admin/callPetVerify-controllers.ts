import {Request, Response} from "express";
import AdminServices from "../../services/AdminServices";

let callPetVerify = async (req:Request, res: Response) => {
    try {
        
        const callPetVerify: any = await AdminServices.callPetVerify();
        console.log('callPetVerify:', callPetVerify);
        
        if (!callPetVerify.select) {
            return res.status(404).json({
                status: callPetVerify.status,
                message: callPetVerify.message,
                select: callPetVerify.select
            });
        }

        return res.status(200).json({
            status: callPetVerify.status,
            message: callPetVerify.message,
            select:  callPetVerify.select,
            Result: callPetVerify.result
        })
    } catch (error: any) {
        console.error('erro interno en el servidor',error);
        return res.status(500).json({
            status: 'error',
            message: 'error interno en el servidor',
            select: false,
            error: error.message
        })
    }
    
}

export default callPetVerify;
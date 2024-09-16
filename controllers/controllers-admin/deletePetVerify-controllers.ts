import { Request, Response } from "express";
import UpdatePetVerify from "../../Dto/Dto-Admin/updatePetVerifyDto";
import AdminServices from "../../services/AdminServices";

let deletePetVerify = async (req:Request, res: Response) => {
    try {
        const IdAdopcionMascota = req.params.IdAdopcionMascota;
       // console.log('idAdopcionMascota', IdAdopcionMascota);
        

        if (typeof IdAdopcionMascota !== 'string') {
            return  res.status(400).json({
                status: 'error Id',
                message: 'error en el IdAdopcionMascota es undefined o null',
                delete: false
            })
           
        }

        const deletePetVerify: any = await AdminServices.deletePetVerify(new UpdatePetVerify(IdAdopcionMascota));
        // console.log('deletePetVerify', deletePetVerify);
         
        if (!deletePetVerify.delete) {
           return res.status(404).json({
                status: deletePetVerify.status,
                message: deletePetVerify.message,
                delete: deletePetVerify.delete
            })
        }

       return res.status(200).json({
            status: deletePetVerify.status,
            message: deletePetVerify.message,
            delete: deletePetVerify.delete
        })
    } catch (error: any) {
        console.error('error interno en el servidor', error);
        return res.status(500).json({
            status: 'error',
            message: 'error interno en el servidor',
            error: error.message
        })
    }
    
}

export default deletePetVerify;
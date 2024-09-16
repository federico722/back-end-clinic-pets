import { Request, Response } from "express";
import AdminServices from "../../services/AdminServices";
import UpdatePetVerify from "../../Dto/Dto-Admin/updatePetVerifyDto";

let updatePetVerify = async (req:Request, res: Response ) => {
  
    try {
        const IdAdopcionMascota = req.params.IdAdopcionMascota;

        console.log('idAdopcionMascota', IdAdopcionMascota);
        
    
        if (typeof IdAdopcionMascota !== "string" ) {
           return  res.status(400).json({
                status: 'error',
                message: 'IdAdopciones es indefino o null',
                update: false
            })
        }

        const updatePetVerify: any = await AdminServices.updatePetVerify(new UpdatePetVerify(IdAdopcionMascota));
        console.log('updatePetVerify', updatePetVerify);
        

        if (!updatePetVerify.update) {
            return  res.status(404).json({
                status: updatePetVerify.status,
                message: updatePetVerify.message,
                update: updatePetVerify.update
            })
        }

        return res.status(200).json({
            status: updatePetVerify.status,
            message: updatePetVerify.message,
            update: updatePetVerify.update
        })
        
    } catch (error: any) {
        console.error('error interno del servidor');
        return res.status(500).json({
            status: 'Error',
            message: 'error interno en el servidor',
            error: error.message
        })
        
    }
}

export default updatePetVerify;
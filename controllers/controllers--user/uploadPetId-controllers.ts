import {Request, Response} from "express";
import UploadPetId from "../../Dto/Dto-User/uploadPetIdDto";
import UserService from "../../services/userServices";

let uploadPetId = async (req: Request, res: Response) => {
    try {
         const IdAdopcionMascota = req.params.IdAdopcionMascota;
         console.log('IdAdopcionMascota', IdAdopcionMascota);
         
         const uploadPetId: any = await UserService.uploadPetId( new UploadPetId(IdAdopcionMascota));
         console.log('info obtenida de la mascota',uploadPetId);
         

         if (!uploadPetId.select) {
            return res.status(404).json({
                status: uploadPetId.status,
                message: uploadPetId.message,
            })
         }

        return res.status(200).json({
              status: uploadPetId.status,
              message: uploadPetId.message,
              Result: uploadPetId.result
        });
    } catch (error: any) {
        console.log('error interno en el servidor', error);
        return res.status(500).json({
            status: 'error',
            message: 'error interno en el servidor',
            error: error.message
        })
    }
}

export default uploadPetId;



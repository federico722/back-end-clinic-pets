import { Request, Response } from "express";
import UploadProductUser from "../../Dto/Dto-User/uploadProductUserDto";
import UserService from "../../services/userServices";

let uploadProductUser = async (req:Request, res: Response) => {
    try {
        
        const IdUsuario = req.user?.id

        console.log(IdUsuario);

        if ( typeof IdUsuario !== 'string') {
            return res.status(400).json({
              status: 'error',
              message: 'User ID not found in token or has invalid type'
            })
        }

        const uploadProductUser: any = await UserService.uploadProductUser(new UploadProductUser(IdUsuario));

        if (!uploadProductUser.consult) {
            return res.status(404).json({
                status: uploadProductUser.status,
                consult: uploadProductUser.consult,
            }) 
        } 

        res.status(200).json({
            status: uploadProductUser.status,
            consult: uploadProductUser.consult,
            Result: uploadProductUser.result
        })


    } catch (error: any) {
         console.error('erro al obtener los datos del producto del usuario', error);
         res.status(500).json({
            status: 'error',
            message: 'error al consultar productos',
            error: error.message
         })
         
    }
}

export default uploadProductUser;
import {Request, Response} from "express";
import UserService from "../services/userServices";
import CallDateUser from "../Dto/callDateUserDto";

let callDate = async (req: Request ,res: Response) =>{
    try {

        console.log('req.user:', req.user);

         // Extraer el ID de usuario de la solicitud
         const IdUsuario: any = req.user?.id;
         console.log('IdUsuario extraído:', IdUsuario);

        // Validar el ID de usuario
        if (typeof IdUsuario !== 'string' ) {
         return res.status(400).json({
           status: 'error',
           messege: 'User ID not found in token or has invalid type'
         });
        }

        const callDateUser: any = await UserService.callDateUser(new CallDateUser(IdUsuario));
        console.log('Datos del usuario obtenidos:', callDateUser);


         // Verificar si se encontraron datos del usuario
        if (!callDateUser || callDateUser.length === 0) {
         return res.status(404).json({
            status: 'error',
            message: 'User not found'
        });
        }

        // Devolver respuesta exitosa con los datos del usuario
        return res.status(200).json({
         status: 'success',
         data: callDateUser
        })
         
    } catch (error: any) {
        console.error('Error en callDate: ', error);
        
               // Devolver respuesta de error
               return res.status(500).json({
                status: 'error',
                message: 'Failed to call Data',
                error: error.message
            });
        
    }
}

export default callDate;
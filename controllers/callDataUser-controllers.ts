import {Request, Response} from "express"
import UserService from "../services/userServices"
import CallDataUser from "../Dto/callDataUserDto"

/**
 * 
 * Manejar las solicitudes para obtener datos de usuario.
 * 
 * @param req El objeto de solicitud de Express.
 * @param res El objeto de respuesta de Express.
 * @returns  Una promesa que se resuelve con la respuesta HTTP.
 */

let callData = async (req: Request, res: Response) => {
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
        
        
        console.log('Intentando obtener datos del usuario con ID:', IdUsuario);
        
        // Obtener datos del usuario utilizando el UserService
        const callDataUser:any = await UserService.callDataUser(new CallDataUser(IdUsuario));
        console.log('Datos del usuario obtenidos:', callDataUser);

        // Verificar si se encontraron datos del usuario
        if (!callDataUser || callDataUser.length === 0) {
         return res.status(404).json({
            status: 'error',
            message: 'User not found'
        });
        }

        // Devolver respuesta exitosa con los datos del usuario
        return res.status(200).json({
         status: 'success',
         data: callDataUser[0]
        })
        
     } catch (error: any) {
      console.error('Error en callData:', error);

       // Devolver respuesta de error
        return res.status(500).json({
            status: 'error',
            message: 'Failed to call Data',
            error: error.message
        });
     }
}

export default callData;


import { Request, Response} from "express";
import CallDataTutor from '../../Dto/callTutorData';
import UserService from "../../services/userServices";

let callTutorData = async (req: Request, res: Response) => {
    try {
        console.log('req.user', req.user);

        // Extraer el ID de usuario de la solicitud
        const IdUsuario: any = req.user?.id;
        console.log('IdUsuario extraído:', IdUsuario);

        //Validar el ID de usuario
        if (typeof IdUsuario !== 'string' ) {
            return res.status(400).json({
              status: 'error',
              message: 'User ID not found in token or has invalid type'
            });
           }

        const callTutorData: any = await UserService.callTutorData(new CallDataTutor(IdUsuario));
        console.log('Datos del usuario obtenidos para la cita:', callTutorData);

        if (!callTutorData.consultation ) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found',
                error: callTutorData.status
            });
            
        } 
        
        // Devolver respuesta exitosa con los datos del usuario
        return res.status(200).json({
            status: 'success',
            querySuccess: callTutorData.consultation,
            Nombre: callTutorData.Nombre,
            Telefono: callTutorData.Telefono,
            Correo: callTutorData.Correo
             
           })
        
        
    } catch (error: any) {
        console.error('Error en la consulta de los datos del usuario para la cita', error);

         // Devolver respuesta de error
         return res.status(500).json({
            status: 'error',
            message: 'Failed to call Data',
            error: error.message
        });
        
        
    }

}

export default callTutorData;
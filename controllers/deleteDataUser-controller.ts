import {Request, Response} from "express";
import UserService from "../services/userServices";
import DeleteDataUser from "../Dto/deleteDataUserDto";


/**
 * Función para manejar la solicitud de eliminación de datos de usuario.
 * @param req - Objeto de solicitud de Express que contiene los parámetros de la solicitud.
 * @param res  - Objeto de respuesta de Express para enviar la respuesta al cliente.
 * @returns  Respuesta en formato JSON con el estado y mensaje sobre la eliminación de datos.
 */


let deleteData = async (req: Request, res: Response) => {

    try {
       
        // Extraer el ID de cita de los parámetros de la solicitud
        const IdCita: any = req.params.idCita;
        
        console.log('IdUsuario extraido: ', IdCita);
        
        // Validar el ID de cita
        if (typeof IdCita !== 'string' ) {
            return res.status(400).json({
                tatus: 'error',
                message: 'User ID not found in token or has invalid type'
            });
        }  

        // Llamar al servicio para eliminar los datos del usuario
        const deleteDataUser: any = await UserService.deleteDataUser(new DeleteDataUser(IdCita));
        console.log('Datos borrados', deleteDataUser);
        
       // Enviar respuesta exitosa con el resultado de la eliminación
        return res.status(200).json({
            status: 'succes',
            message: 'Data delete successfully',
            data: deleteDataUser
        });

        
    } catch (error: any) {
        console.error('Error en delete: ', error);
        
     // Enviar respuesta de error en caso de fallo
        return res.status(500).json({
         status: 'error',
         message: 'Failed to delete Data',
         error: error.message
     });
 
    }

}

export default deleteData;
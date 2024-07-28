import {Request, Response} from "express";
import UserService from "../services/userServices";
import DeleteDataUser from "../Dto/deleteDataUserDto";


let deleteData = async (req: Request, res: Response) => {
    try {
        console.log('req.params:', req.params.idCita);

        const IdCita: any = req.params.idCita;
        
        console.log('IdUsuario extraido: ', IdCita);
        
        // Validar el ID de usuario
        if (typeof IdCita !== 'string' ) {
            return res.status(400).json({
                tatus: 'error',
                message: 'User ID not found in token or has invalid type'
            });
        }  

        const deleteDataUser: any = await UserService.deleteDataUser(new DeleteDataUser(IdCita));
        console.log('Datos borrados', deleteDataUser);
        
        //Enviar respuesta de exito 
        return res.status(200).json({
            status: 'succes',
            message: 'Data delete successfully',
            data: deleteDataUser
        });

        
    } catch (error: any) {
        console.error('Error en delete: ', error);
        
        // Devolver respuesta de error
        return res.status(500).json({
         status: 'error',
         message: 'Failed to delete Data',
         error: error.message
     });
 
    }

}

export default deleteData;
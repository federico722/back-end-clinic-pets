import { Request, Response } from "express";
import UserService from '../services/userServices';
import { validationResult } from "express-validator";
import Profile from "../Dto/editProfileDto";

/**
 * @description Controlador para actualizar el perfil de un usuario.
 * @async
 * @function updateProfile
 * @param req - Objeto de solicitud de Express, que contiene el cuerpo de la solicitud con los datos de perfil a actualizar.
 * @param res - Objeto de respuesta de Express, que se utiliza para enviar respuestas al cliente.
 * @returns - Retorna una promesa que resuelve a void.
 */

let updateProfile = async (req: Request, res: Response) => {
    try {
        
        // Valida los resultados de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    // Extrae los datos del cuerpo de la solicitud
        const { 
            nombre,
            apellido,
           // numeroDeDocumento,
            numeroDeTelefono,
            email,
            imagenPerfil
        } = req.body;

        console.log('devolucion del front edit perfil', req.body);
        


    // Obtiene el ID del usuario de la solicitud
        const IdUsuario: any = req.user?.id

        console.log("datos mandados desde postman",req.body);
        
    // Llama al método de actualización de perfil del servicio de usuarios con los datos proporcionados
        const editProfile = await UserService.updateProfile(new Profile( 
            nombre,
            apellido,
           // numeroDeDocumento,
            numeroDeTelefono,
            email,
            IdUsuario,
            imagenPerfil
        ));

        console.log(editProfile);

        // Verifica si la actualización del perfil fue exitosa
        if (editProfile.Update) {
            return res.status(200).json({
                status: 'success',
                message: 'Profile updated successfully'
            });
        }else{

        // Maneja errores específicos basados en el estado devuelto
            if (editProfile.status === "Invalid Id or data") {
                return res.status(400).json({
                    status: 'failed',
                    message: 'Invalid user ID or data provided',
                });
            }else{
                return res.status(500).json({
                    status: 'failed',
                    message: 'Failed to update profile',
                    error: editProfile.status
                })

            }
        }
        
        
    } catch (error:any) {

    // Maneja cualquier error que ocurra durante el proceso de actualización del perfil
        return res.status(500).json({
            status: 'error',
            message: 'Failed to update profile',
            error: error.message
        });
    }
}

export default updateProfile; 
import { Request, Response } from "express";
import UserService from "../services/userServices";
import Veterinary from "../Dto/veterinaryDto";

/**
 * Función para manejar la solicitud de registro de un veterinario.
 * @param req  - Objeto de solicitud de Express que contiene los datos del veterinario.
 * @param res  - Objeto de respuesta de Express para enviar la respuesta al cliente.
 * @returns   Respuesta en formato JSON con el estado del registro.
 */

let registerVeterinary = async (req: Request, res: Response) => {
    try {
         // Extraer los datos del cuerpo de la solicitud
        const{
            idVeterinario,
            idAdministrador,
            nombre,
            apellido,
            email,
            contrasenia,
            confirmarContrasenia
        } = req.body
        console.log(req.body);

        // Llamar al servicio para registrar el veterinario
        const registerVeterinary = await UserService.registerVeterinary( new Veterinary(idVeterinario, idAdministrador, nombre, apellido, email, contrasenia));
        console.log(registerVeterinary);

        // Verificar si el registro fue exitoso
        if (registerVeterinary) {
            return res.status(201).json(
                { status: 'register veterinary ok'}
            );
        } else {
            return res.status(500).json(
                { status: 'el usuario veterinario ya esta registrado'}
            );
        }
        
        
        
    } catch (error: any) {
     // Manejo de errores de duplicación de entrada
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }else{
            console.error(error.message);
           // Devolver una respuesta genérica de error
            return res.status(500).json({
                status: 'error',
                message: 'Failed to register veterinary',
                error: error.message
            })

              
        }
    }
}

export default registerVeterinary;

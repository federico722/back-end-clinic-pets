import { Request, Response } from "express";
import UserService from "../services/userServices";
import User from "../Dto/UserDto";


/**
* @description Controlador para registrar un nuevo usuario.
 * @async
 * @function register
 * @param req - Objeto de solicitud de Express, que contiene el cuerpo de la solicitud con los datos del usuario a registrar.
 * @param res - Objeto de respuesta de Express, que se utiliza para enviar respuestas al cliente.
 * @returns  - Retorna una promesa que resuelve a void.
 */


let register = async (req: Request, res: Response) => {
    try {

        // Extrae los datos del cuerpo de la solicitud
        const {
            numeroDeDocumento,
            nombre,
            apellido,
            numeroDeTelefono,
            email,
            contrasenia,
            confirmarContrasenia
        } =req.body
        console.log(req.body);
        
        // Llama al método de registro del servicio de usuarios con los datos proporcionados
        const registerUser = await UserService.register(new User(
            numeroDeDocumento, 
            nombre, 
            apellido, 
            numeroDeTelefono, 
            email, 
            contrasenia
        ));

        console.log(registerUser);

        // Verifica si el registro del usuario fue exitoso
        if (registerUser) {
            return res.status(201).json(
                { status: 'register ok'}
            );
        } else {
            return res.status(500).json(
                { status: 'el usuario ya esta registrado'}
            );
        }
        

    } catch (error: any) {
     // Maneja el error específico de entrada duplicada en la base de datos
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }else{
            console.error(error.message);
              
        }
    }
}

export default register;
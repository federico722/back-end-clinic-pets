import { Request, Response } from "express";
import UserService from "../../services/userServices";
import User from "../../Dto/Dto-User/userDto";
import { sendWelcomeEmail } from "../../services/emailService";

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

             res.status(201).json({ status: 'register ok'});

            sendWelcomeEmail(email,nombre)
               .then(() => console.log("Correo de bienvenida enviado"))
               .catch(emailError => console.error("Error al enviar el correo de bienvenida:", emailError));
        } else {
            return res.status(500).json({ status: 'el usuario ya esta registrado'});
        }
    } catch (error: any) {
     // Maneja el error específico de entrada duplicada en la base de datos
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }else{
            console.error(error.message);
            return res.status(500).json({ status: 'Error interno del servidor' });
        }
    }
}

export default register;
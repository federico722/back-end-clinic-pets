import { Request ,Response } from "express";
import Auth from "../Dto/authDto";
import UserService from "../services/userServices";
import generateToken from "../Helpers/generateToken";
import dotenv from "dotenv";
dotenv.config();

/**
 * 
 * @description Controlador de autenticación de usuarios.
 * @async
 * @function auth
 * @param req  - Objeto de solicitud de Express, que contiene el cuerpo de la solicitud con los datos de inicio de sesión.
 * @param res  - - Objeto de respuesta de Express, que se utiliza para enviar respuestas al cliente.
 * @returns  - Retorna una promesa que resuelve a void.
 */


let auth = async (req: Request, res: Response) => {
    try {

       // Extrae el correo electrónico y la contraseña del cuerpo de la solicitud
        const { email, contrasenia } = req.body;

      // Llama al método de login del servicio de usuarios con los datos de autenticación
        const login = await UserService.login( new Auth(email, contrasenia));
        console.log('miro el retorno de auth', login);
        

       // console.log("existe el rol en auth:",login.rol);
        
      
    // Verifica si el inicio de sesión fue exitoso
        if (login.logged) {

    // Asegúrate de que login.id exista y sea válido
    console.log(login.id);
    
    
    // Si no hay ID de usuario después de un inicio de sesión exitoso, responde con un error
      if (!login.id) {
        return res.status(500).json({
          status: 'error',
          message: 'User ID not found after successful login'
        })};
            
          // Responde con el estado de éxito y el token generado
            return res.status(200).json({
                status: login.status,
                token: generateToken({id: login.id}, process.env.KEY_TOKEN, 50),
                rol: login.rol
            });
            
        } else {
          // Responde con un error de credenciales inválidas
            return res.status(401).json({
              status: 'error',
              message: 'Invalid credentials'
            });
          }


    } catch (error) {
    
  // Maneja cualquier error que ocurra durante el proceso de autenticación
        console.error('Error in auth:', error);
        return res.status(500).json({
          status: 'error',
          message: 'Internal server error'
        });
      }
}

export default auth;

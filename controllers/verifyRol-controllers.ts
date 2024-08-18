import { Request, Response } from "express";
import VerifyRol from '../Dto/verifyRol';
import UserService from "../services/userServices";

/**
 * Controlador para verificar el rol de un usuario.
 * Este controlador extrae el ID del usuario del token JWT, valida el ID, y luego verifica el rol del usuario
 * utilizando un servicio específico.
 *
 * @param req - La solicitud HTTP, que incluye el token JWT y otros datos.
 * @param res - La respuesta HTTP, donde se enviará el resultado de la verificación del rol.
 */
let verifyRol = async (req: Request, res: Response) => {
    try {
        // Mostrar en consola el objeto req.user para depuración
        console.log("req.user", req.user);

        // Extraer el ID del usuario desde el token JWT
        const IdUsuario: any = req.user?.id;
        console.log('IdUsuario extraído:', IdUsuario);

        // Validar el ID de usuario
        if (typeof IdUsuario !== 'string') {
            return res.status(400).json({
                success: false,
                message: 'User ID not found in token or has invalid type' // Mensaje de error si el ID no es válido o no existe
            });
        }

        // Llamar al servicio para verificar el rol del usuario
        const verifyRolUser: any = await UserService.verifyRolUser(new VerifyRol(IdUsuario));
        console.log("resultado: ", verifyRolUser);

        // Verificar si el rol fue encontrado
        if (!verifyRolUser || !verifyRolUser.VerifyRol) {
            return res.status(404).json({
                success: false,
                message: 'User not found' // Mensaje de error si el usuario no fue encontrado
            });
        }

        // Responder con éxito y enviar el rol del usuario
        return res.status(200).json({
            success: true,
            role: verifyRolUser.rol // Devolver el rol del usuario
        });

    } catch (error) {
        // Manejar errores y devolver un mensaje de error general
        console.log("error en verifyRol", error);

        return res.status(500).json({
            success: false,
            message: 'Internal server error' // Mensaje de error para fallos internos del servidor
        });
    }
}

export default verifyRol;

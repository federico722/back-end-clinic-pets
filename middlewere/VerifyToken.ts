import jwt from "jsonwebtoken";
import { Request, Response, NextFunction} from "express";
import dotenv from "dotenv";

// Carga la variables del entormo
dotenv.config()

/**
 * Interfaz que define  la estructura del payload del jwt
 */

interface JwtPayload {
    data: {id: number},
    exp: number,
    iat: number
}

/**
 * 
 * Middlewere  para verificar el token jwt
 * 
 * @param req - Objeto Request de Express
 * @param res - Objeto Response de Express
 * @param next - Funcion NextFunction de Express 
 * @returns  Una respuesta JSON con un código de estado si hay un error, o llama a next() si la verificación es exitosa
 */

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    // Obtiene el header de autorización
    let authorization = req.get('Authorization');

    if (authorization) {
         // Extrae el token del header de autorización

        const token = authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json(
                {status: 'you have not sent a token'}
            );
        };
        try {
            // Verifica el token
            let decoded = jwt.verify(token, process.env.KEY_TOKEN as string) as JwtPayload;

             // Añade el ID del usuario al cuerpo de la solicitud
            req.body.id = decoded.data.id;

            // Pasa al siguiente middleware
            next()
        } catch (error) {
            // Si la verificación falla, devuelve un error 403
            return res.status(403).json(
                {status: 'Unauthorized'}
            );
        }
    } else{
        // Si no hay header de autorización, devuelve un error 403
        return res.status(403).json(
            { status: "The Authorization header is required"}
        );
    }

}

export default verifyToken;
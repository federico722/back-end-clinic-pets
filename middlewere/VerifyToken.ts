import jwt from "jsonwebtoken";
import { Request, Response, NextFunction} from "express";
import dotenv from "dotenv";

// Carga la variables del entormo
dotenv.config()

/**
 * Interfaz que define  la estructura del payload del jwt
 */

interface JwtPayload {
    data: {id: string},
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


// Extender la interfaz Request para incluir la propiedad user
declare global {
    namespace Express {
        interface Request {
            user?: {id: string}
        }
    }
}



const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    // Obtiene el header de autorización
    let authorization = req.get('Authorization');
    console.log('Authorization header:', authorization);


    if (!authorization) {
        return res.status(401).json({ status: 'error', message: 'No token provided' });
      }

    


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
            console.log('Token decodificado:', decoded);

            // Añade el ID del usuario a req.user en lugar de req.body
            req.user = {id: decoded.data.id};

            //req.body.id = decoded.data.id;

            // Pasa al siguiente middleware
            next()
        } catch (error) {
            console.error('Error al verificar el token:', error);

            if (error instanceof jwt.TokenExpiredError) {
                return res.status(403).json({ status: 'error', message: 'Token expired' });
              }

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
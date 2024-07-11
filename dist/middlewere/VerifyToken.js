"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
// Carga la variables del entormo
dotenv_1.default.config();
/**
 *
 * Middlewere  para verificar el token jwt
 *
 * @param req - Objeto Request de Express
 * @param res - Objeto Response de Express
 * @param next - Funcion NextFunction de Express
 * @returns  Una respuesta JSON con un código de estado si hay un error, o llama a next() si la verificación es exitosa
 */
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtiene el header de autorización
    let authorization = req.get('Authorization');
    if (authorization) {
        // Extrae el token del header de autorización
        const token = authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ status: 'you have not sent a token' });
        }
        ;
        try {
            // Verifica el token
            let decoded = jsonwebtoken_1.default.verify(token, process.env.KEY_TOKEN);
            // Añade el ID del usuario al cuerpo de la solicitud
            req.body.id = decoded.data.id;
            // Pasa al siguiente middleware
            next();
        }
        catch (error) {
            // Si la verificación falla, devuelve un error 403
            return res.status(403).json({ status: 'Unauthorized' });
        }
    }
    else {
        // Si no hay header de autorización, devuelve un error 403
        return res.status(403).json({ status: "The Authorization header is required" });
    }
});
exports.default = verifyToken;

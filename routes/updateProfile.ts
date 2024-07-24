import express from "express";
import updateProfile from "../controllers/profile-controller";
import verifyToken from "../middlewere/VerifyToken";

/**
 * 
 * Router para manejar las rutas relacionadas con la actualización del perfil de usuario.
 * 
 */

const router = express.Router();

/**
 * 
 * Ruta PUT para actualizar el perfil de usuario.
 * @route PUT /
 * @middleware verifyToken - Verifica el token de autenticación antes de procesar la solicitud.
 * @controller updateProfile - Maneja la lógica para actualizar los datos del perfil del usuario.
 * 
 */

router.put('/',  verifyToken, updateProfile);

export default router;


import express from "express";
import authController from '../controllers/auth-controllers';


/**
 * Router para manejar las rutas relacionadas con la autenticación de usuarios.
 */

const router = express.Router();

/**
 * Ruta POST para autenticar a un usuario.
 * @route POST /
 * @controller authController - Maneja la lógica de autenticación del usuario.
 */

router.post('/', authController);

export default router;
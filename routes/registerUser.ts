import express from "express";
import registerController from '../controllers/controllers--user/registerUser-controller';
import { validator, validatorParams } from "../middlewere/registerUser-validator";

/**
 * Router para manejar las rutas relacionadas con el registro de nuevos usuarios.
 */

const router = express.Router();

/**
 * Ruta POST para registrar un nuevo usuario.
 * @route POST /
 * @middleware validatorParams - Valida los parámetros de la solicitud.
 * @middleware validator - Ejecuta las validaciones definidas.
 * @controller registerController - Maneja la lógica de registro del nuevo usuario.
 */


router.post('/', validatorParams, validator, registerController );


export default router;
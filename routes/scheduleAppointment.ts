import express from "express";
import verifyToken from "../middlewere/VerifyToken";
import scheduleController from "../controllers/scheduleAppointment-controller";

/**
 * 
 * Router para manejar las rutas relacionadas con la programación de citas.
 * 
 *  
*/ 

const router = express.Router();

/**
 * 
 * Ruta POST para programar una nueva cita.
 * @route POST /
 * @middleware verifyToken - Verifica el token de autenticación antes de procesar la solicitud.
 * @controller scheduleController - Maneja la lógica para programar una nueva cita.
 * 
 */


router.post('/', verifyToken, scheduleController);


export default router;
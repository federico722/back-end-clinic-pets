import Express  from "express";
import callDataController from "../controllers/callDataUser-controllers"
import verifyToken from "../middlewere/VerifyToken";

/**
 * 
 * Router para manejar las rutas relacionadas con la obtención de datos de usuario.
 * 
 */


const router = Express.Router();

/**
 * 
 * Ruta GET para obtener datos de usuario.
 * @route GET /
 * @middleware verifyToken - Verifica el token de autenticación antes de procesar la solicitud.
 * @controller callDataController - Maneja la lógica para obtener y devolver los datos del usuario.
 */

router.get('/',verifyToken, callDataController );

export default router;

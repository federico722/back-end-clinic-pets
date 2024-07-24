import { check, validationResult } from "express-validator";
import {Request, Response, NextFunction} from "express";


/**
 * Array de validaciones para los parámetros de login.
 */

export let validatorParamsLogin = [

     /**
     * Validación para el campo 'correo'.
     * - Debe existir
     * - Debe ser una cadena de texto
     * - No puede estar vacío
     */

    check('correo')
    .exists().withMessage('El correo debe existir')
    .isString().withMessage('El correo debe ser una cadena de texto')
    .notEmpty().withMessage('El correo es requerido'),

    /**
     * Validación para el campo 'contrasenia'.
     * - Debe existir
     * - Debe ser una cadena de texto
     * - No puede estar vacía
     */

    check('contrasenia')
    .exists().withMessage('La contraseña debe existir')
    .isString().withMessage('La contraseña debe ser una cadena de texto')
    .notEmpty().withMessage('La contraseña es requerida')
    
];

/**
 * 
 * Middleware para validar los resultados de las validaciones de login.
 * 
 * @param req Objeto de solicitud de Express
 * @param res Objeto de respuesta de Express
 * @param next Función para pasar el control al siguiente middleware
 * @returns Retorna una respuesta con errores si hay fallos en la validación,
 * o pasa al siguiente middleware si todo está correcto
 */


export function validatorLogin(req: Request, res: Response, next: NextFunction) {

    const errors = validationResult(req);

    if (! errors.isEmpty() ) {

        return  res.status(422).json({
            errors: errors.array()
        })
        
    }

    next();
    
};
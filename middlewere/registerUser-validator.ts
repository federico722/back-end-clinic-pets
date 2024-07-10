import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

/**
 * Array de validadores para los parámetros de entrada
 * Cada validador verifica un campo específico de la solicitud
 */
export let validatorParams = [
    // Validación para el campo 'nombre'
    check('nombre')
    .exists().withMessage('El nombre debe existir')
    .isString().withMessage('El nombre debe ser una cadena de texto')
    .notEmpty().withMessage('El nombre es requerido'),

    // Validación para el campo 'apellido'
    check('apellido')
    .exists().withMessage('El apellido debe existir')
    .isString().withMessage('El apellido debe ser una cadena de texto')
    .notEmpty().withMessage('El apellido es requerido'),

    // Validación para el campo 'numeroDeDocumento'
    check('numeroDeDocumento')
    .exists().withMessage('El número de documento debe existir')
    .isString().withMessage('El número de documento debe ser una cadena de texto')
    .notEmpty().withMessage('El documento es requerido'),

    // Validación para el campo 'numeroDeTelefono'
    check('numeroDeTelefono')
    .exists().withMessage('El número de teléfono debe existir')
    .isString().withMessage('El número de teléfono debe ser una cadena de texto')
    .notEmpty().withMessage('El teléfono es requerido'),

    // Validación para el campo 'email'
    check('email')
    .exists().withMessage('El email debe existir')
    .isEmail().withMessage('El correo debe tener un formato válido')
    .withMessage('El correo es requerido'),

    // Validación para el campo 'contrasenia'
    check('contrasenia')
    .exists().withMessage('La contraseña debe existir')
    .isString().withMessage('La contraseña debe ser una cadena de texto')
    .withMessage('La contraseña es requerida')
];


/**
 * 
 * Middlewere para validar los parametros de la solicitud
 * 
 * @param req req - Objeto Request de Express
 * @param res res - Objeto Response de Express
 * @param next next - Función NextFunction de Express
 * @returns Una respuesta JSON con errores si la validación falla, o llama a next() si la validación es exitosa
 */

export function validator(req: Request, res: Response, next: NextFunction) {
    // Ejecuta la validación
    const errors = validationResult(req);

    // Si hay errores de validación
    if (!errors.isEmpty()) {
    // Retorna una respuesta con estado 422 (Unprocessable Entity) y los errores
        return res.status(422).json({
            errors: errors.array()
        });
    }

    // Si no hay errores, pasa al siguiente middleware
    next();
}



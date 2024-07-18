import {check, validationResult} from "express-validator"
import {Request, Response, NextFunction} from "express"

export let validatorsParamsVeterinary = [

    check('idVeterinario')
    .exists().withMessage('El documento del veterinario debe existir')
    .isString().withMessage('El documento debe ser una cadena de texto')
    .notEmpty().withMessage('El documento es requerido'),

    check('idAdministrador')
    .exists().withMessage('El documento del administrador debe existir')
    .isString().withMessage('El documento debe ser una cadena de texto')
    .notEmpty().withMessage('el documento es requerido'),

    check('nombre')
    .exists().withMessage('El nombre debe existir')
    .isString().withMessage('El nombre debe ser una cadena de texto')
    .notEmpty().withMessage('El nombre es requerido'),

    check('apellido')
    .exists().withMessage('El apellido debe existir')
    .isString().withMessage('El apellido debe ser una cadena de texto')
    .notEmpty().withMessage('El apellido es requerido'),

    check('email')
    .exists().withMessage('El email debe existir')
    .isEmail().withMessage('El correo debe tener un formato válido')
    .withMessage('El correo es requerido'),

    check('contrasenia')
    .exists().withMessage('La contraseña debe existir')
    .isString().withMessage('La contraseña debe ser una cadena de texto')
    .withMessage('La contraseña es requerida')



]


export function validatorVeterinary(req: Request, res: Response, next: NextFunction) {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        
        return res.status(422).json({
            errors: errors.array()
        });
    }

    next();
}

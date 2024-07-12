import { check, validationResult } from "express-validator";
import {Request, Response, NextFunction} from "express";



export let validatorParamsLogin = [

    check('correo')
    .exists().withMessage('El correo debe existir')
    .isString().withMessage('El correo debe ser una cadena de texto')
    .notEmpty().withMessage('El correo es requerido'),

    check('contrasenia')
    .exists().withMessage('La contraseña debe existir')
    .isString().withMessage('La contraseña debe ser una cadena de texto')
    .notEmpty().withMessage('La contraseña es requerida')
    
];



export function validatorLogin(req: Request, res: Response, next: NextFunction) {

    const errors = validationResult(req);

    if (! errors.isEmpty() ) {

        return  res.status(422).json({
            errors: errors.array()
        })
        
    }

    next();
    
};
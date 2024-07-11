"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorParamsLogin = void 0;
exports.validatorLogin = validatorLogin;
const express_validator_1 = require("express-validator");
exports.validatorParamsLogin = [
    (0, express_validator_1.check)('correo')
        .exists().withMessage('El correo debe existir')
        .isString().withMessage('El correo debe ser una cadena de texto')
        .notEmpty().withMessage('El correo es requerido'),
    (0, express_validator_1.check)('contrasenia')
        .exists().withMessage('La contraseña debe existir')
        .isString().withMessage('La contraseña debe ser una cadena de texto')
        .notEmpty().withMessage('La contraseña es requerida')
];
function validatorLogin(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
    next();
}
;

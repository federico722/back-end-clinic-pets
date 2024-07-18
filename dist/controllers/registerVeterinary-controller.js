"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veterinaryServices_1 = __importDefault(require("../services/veterinaryServices"));
const veterinaryDto_1 = __importDefault(require("../Dto/veterinaryDto"));
let registerVeterinary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idVeterinario, idAdministrador, nombre, apellido, email, contrasenia } = req.body;
        console.log(req.body);
        const registerVeterinary = yield veterinaryServices_1.default.registerVeterinary(new veterinaryDto_1.default(idVeterinario, idAdministrador, nombre, apellido, email, contrasenia));
        console.log(registerVeterinary);
        if (registerVeterinary) {
            return res.status(201).json({ status: 'register veterinary ok' });
        }
        else {
            return res.status(500).json({ status: 'el usuario veterinario ya esta registrado' });
        }
    }
    catch (error) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        else {
            console.error(error.message);
        }
    }
});
exports.default = registerVeterinary;

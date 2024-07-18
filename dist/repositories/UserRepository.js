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
const config_db_1 = __importDefault(require("../config/config-db"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserRepository {
    static add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO usuario (nombreUsuario, apellidoUsuario, numeroDeDocumento, numeroDeTelefono, correoUsuario, contraseniaUsuario) VALUES (?, ?, ?, ?, ?, ?)';
            const values = [user.nombre, user.apellido, user.numeroDeDocumento, user.numeroDeTelefono, user.email, user.contrasenia];
            return config_db_1.default.execute(sql, values);
        });
    }
    static login(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT IdUsuario, contraseniaUsuario AS contrasenia FROM usuario WHERE correoUsuario=? UNION SELECT IdAdministrador, contrasenaAdministrador AS contrasenia FROM administrador WHERE correoAdministrador=?';
            const values = [auth.email, auth.email];
            const result = yield config_db_1.default.execute(sql, values);
            if (result[0].length > 0) {
                const esContraseniaValida = yield bcryptjs_1.default.compare(auth.contrasenia, result[0][0].contrasenia);
                if (esContraseniaValida) {
                    return { logged: true, status: "Successful authentication", id: result[0][0].id };
                }
                ;
                return { logged: false, status: "Invalid username or password" };
            }
            return { logged: false, status: "Invalid username or password" };
        });
    }
}
exports.default = UserRepository;

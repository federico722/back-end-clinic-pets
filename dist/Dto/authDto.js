"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    constructor(email, contrasenia) {
        this._email = email;
        this._contrasenia = contrasenia;
    }
    //Getters
    get email() {
        return this._email;
    }
    get contrasenia() {
        return this._contrasenia;
    }
    //Setters
    set email(email) {
        this._email = email;
    }
    set contrasenia(contrasenia) {
        this._contrasenia = contrasenia;
    }
}
exports.default = Auth;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(nombre, apellido, numeroDeDocumento, numeroDeTelefono, email, contrasenia) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._numeroDeDocumento = numeroDeDocumento;
        this._numeroDeTelefono = numeroDeTelefono;
        this._email = email;
        this._contrasenia = contrasenia;
    }
    //Getters
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get numeroDeDocumento() {
        return this._numeroDeDocumento;
    }
    get numeroDeTelefono() {
        return this._numeroDeTelefono;
    }
    get email() {
        return this._email;
    }
    get contrasenia() {
        return this._contrasenia;
    }
    // Setters
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    set numeroDeDocumento(numeroDeDocumento) {
        this._numeroDeDocumento = numeroDeDocumento;
    }
    set numeroDeTelefono(numeroDeTelefono) {
        this._numeroDeTelefono = numeroDeTelefono;
    }
    set email(email) {
        this._email = email;
    }
    set contrasenia(contrasenia) {
        this._contrasenia = contrasenia;
    }
}
exports.default = User;

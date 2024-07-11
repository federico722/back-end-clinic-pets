"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veterinary {
    constructor(nombre, apellido, email, contrasenia) {
        this._nombre = nombre;
        this._apellido = apellido;
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
    set email(email) {
        this._email = email;
    }
    set contrasenia(contrasenia) {
        this._contrasenia = contrasenia;
    }
}
exports.default = Veterinary;

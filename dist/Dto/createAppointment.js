"use strict";
class createAppointment {
    constructor(nombreUsuario, telefonoUsuario, correoUsuario, direccionUsuario, nombreDeLaMascota, edadDeLaMascota, estadoDeVacunacion, cantidadDeVacunas, especieDeLaMascota, razaDeLaMascota, motivoConsulta, fechaDeLaCita, horaDeLaCita) {
        this._nombreUsuario = nombreUsuario;
        this._telefonoUsuario = telefonoUsuario;
        this._correoUsuario = correoUsuario;
        this._direccionUsuario = direccionUsuario;
        this._nombreDeLaMascota = nombreDeLaMascota;
        this._edadDeLaMascota = edadDeLaMascota;
        this._estadoDeVacunacion = estadoDeVacunacion;
        this._cantidadDeVacunas = cantidadDeVacunas;
        this._especieDeLaMascota = especieDeLaMascota;
        this._razaDeLaMascota = razaDeLaMascota;
        this._motivoConsulta = motivoConsulta;
        this._fechaDeLaCita = fechaDeLaCita;
        this._horaDeLaCita = horaDeLaCita;
    }
    //Getters
    get nombreUsuario() {
        return this._nombreUsuario;
    }
    get telefonoUsuario() {
        return this._telefonoUsuario;
    }
    get correoUsuario() {
        return this._correoUsuario;
    }
    get direccionUsuario() {
        return this._direccionUsuario;
    }
    get nombreDeLaMascota() {
        return this._nombreDeLaMascota;
    }
    get edadDeLaMascota() {
        return this._edadDeLaMascota;
    }
    get estadoDeVacunacion() {
        return this._estadoDeVacunacion;
    }
    get cantidadDeVacunas() {
        return this._cantidadDeVacunas;
    }
    get especieDeLaMascota() {
        return this._especieDeLaMascota;
    }
    get razaDeLaMascota() {
        return this._razaDeLaMascota;
    }
    get motivoConsulta() {
        return this._motivoConsulta;
    }
    get fechaDeLaCita() {
        return this._fechaDeLaCita;
    }
    get horaDeLaCita() {
        return this._horaDeLaCita;
    }
    //Setters
    set nombreUsuario(nombreUsuario) {
        this._nombreUsuario = nombreUsuario;
    }
    set telefonoUsuario(telefonoUsuario) {
        this._telefonoUsuario = telefonoUsuario;
    }
    set correoUsuario(correoUsuario) {
        this._correoUsuario = correoUsuario;
    }
    set direccionUsuario(direccionUsuario) {
        this._direccionUsuario = direccionUsuario;
    }
    set nombreDeLaMascota(nombreDeLaMascota) {
        this._nombreDeLaMascota = nombreDeLaMascota;
    }
    set edadDeLaMascota(edadDeLaMascota) {
        this._edadDeLaMascota = edadDeLaMascota;
    }
    set estadoDeVacunacion(estadoDeVacunacion) {
        this._estadoDeVacunacion = estadoDeVacunacion;
    }
    set cantidadDeVacunas(cantidadDeVacunas) {
        this._cantidadDeVacunas = cantidadDeVacunas;
    }
    set especieDeLaMascota(especieDeLaMascota) {
        this._especieDeLaMascota = especieDeLaMascota;
    }
    set razaDeLaMascota(razaDeLaMascota) {
        this._razaDeLaMascota = razaDeLaMascota;
    }
    set motivoConsulta(motivoConsulta) {
        this._motivoConsulta = motivoConsulta;
    }
    set fechaDeLaCita(fechaDeLaCita) {
        this._fechaDeLaCita = fechaDeLaCita;
    }
    set horaDeLaCita(horaDeLaCita) {
        this._horaDeLaCita = horaDeLaCita;
    }
}

class createAppointment {
    private _nombreUsuario: string;
    private _telefonoUsuario: string;
    private _correoUsuario: string;
    private _direccionUsuario: string;  
    private _nombreDeLaMascota: string;
    private _edadDeLaMascota: number;
    private _estadoDeVacunacion: string;
    private _cantidadDeVacunas: number;
    private _especieDeLaMascota: string;
    private _razaDeLaMascota: string;
    private _motivoConsulta: string;
    private _fechaDeLaCita: string;
    private _horaDeLaCita: string;
    constructor(
        nombreUsuario: string, telefonoUsuario: string, correoUsuario: string, direccionUsuario: string,
        nombreDeLaMascota: string, edadDeLaMascota: number, estadoDeVacunacion: string, cantidadDeVacunas: number,
        especieDeLaMascota: string, razaDeLaMascota: string, motivoConsulta: string, fechaDeLaCita: string, 
        horaDeLaCita: string
    ) {
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
    get nombreUsuario(): string {
        return this._nombreUsuario;
    }

    get telefonoUsuario(): string{
        return this._telefonoUsuario;
    }

    get correoUsuario(): string{
        return this._correoUsuario;
    }

    get direccionUsuario(): string{
        return this._direccionUsuario;
    }

    get nombreDeLaMascota(): string{
        return this._nombreDeLaMascota;
    }

    get edadDeLaMascota(): number{
        return this._edadDeLaMascota;
    }

    get estadoDeVacunacion(): string{
        return this._estadoDeVacunacion;
    }

    get cantidadDeVacunas(): number{
        return this._cantidadDeVacunas;
    }

    get especieDeLaMascota(): string{
        return this._especieDeLaMascota;
    }

    get razaDeLaMascota(): string{
        return this._razaDeLaMascota;
    }

    get motivoConsulta(): string{
        return this._motivoConsulta;
    }

    get fechaDeLaCita(): string {
        return this._fechaDeLaCita;
    }

    get horaDeLaCita(): string {
        return this._horaDeLaCita;
    }
    

    //Setters
    set nombreUsuario(nombreUsuario: string){
        this._nombreUsuario = nombreUsuario;
    }

    set telefonoUsuario(telefonoUsuario: string){
        this._telefonoUsuario = telefonoUsuario;
    }

    set correoUsuario(correoUsuario: string){
        this._correoUsuario = correoUsuario;
    }

    set direccionUsuario(direccionUsuario: string){
        this._direccionUsuario = direccionUsuario;
    }

    set nombreDeLaMascota(nombreDeLaMascota: string){
        this._nombreDeLaMascota = nombreDeLaMascota;
    }

    set edadDeLaMascota(edadDeLaMascota: number){
        this._edadDeLaMascota = edadDeLaMascota;
    }

    set estadoDeVacunacion(estadoDeVacunacion: string){
        this._estadoDeVacunacion = estadoDeVacunacion;
    }

    set cantidadDeVacunas(cantidadDeVacunas: number){
        this._cantidadDeVacunas = cantidadDeVacunas;
    }

    set especieDeLaMascota(especieDeLaMascota: string){
        this._especieDeLaMascota = especieDeLaMascota;
    }

    set razaDeLaMascota(razaDeLaMascota: string){
        this._razaDeLaMascota = razaDeLaMascota;
    }

    set motivoConsulta(motivoConsulta: string){
        this._motivoConsulta = motivoConsulta;
    }

    set fechaDeLaCita(fechaDeLaCita: string){
        this._fechaDeLaCita = fechaDeLaCita;
    }

    set horaDeLaCita(horaDeLaCita: string){
        this._horaDeLaCita = horaDeLaCita;
    }


}
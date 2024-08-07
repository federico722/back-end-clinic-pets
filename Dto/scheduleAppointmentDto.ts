class Schedule {
    private _IdUsuario: string;
    private _nombre: string;
    private _telefono: string;
    private _correo: string;
    private _direccion: string;
    private _nombreMascota: string;
    private _edad: number;
    private _especie: string;
    private _estadoVacunacion: string;
    private _raza: string;
    private _motivoConsulta: string;
    private _sexo: string;
    private _tipoCita: string;
    private _fecha: string;
    private _hora: string;

    constructor(
        IdUsuario: string,
        nombre: string, 
        telefono: string, 
        correo: string,
        direccion: string,
        nombreMascota: string,
        edad: number, 
        especie: string,
        estadoVacunacion: string, 
        raza: string,
        motivoConsulta: string,
        sexo: string,
        tipoCita: string,
        fecha: string, 
        hora: string
    ) {
        this._IdUsuario = IdUsuario;
        this._nombre = nombre;
        this._telefono = telefono;
        this._correo = correo;
        this._direccion = direccion;
        this._nombreMascota = nombreMascota;
        this._edad = edad;
        this._especie = especie;
        this._estadoVacunacion = estadoVacunacion;
        this._raza = raza;
        this._motivoConsulta = motivoConsulta;
        this._sexo = sexo;
        this._tipoCita = tipoCita;
        this._fecha = fecha;
        this._hora = hora;
    }

    public get IdUsuario() : string {
        return this._IdUsuario;
    }

    public get nombre() : string {
        return this._nombre;
    }

    public get telefono() : string {
        return this._telefono;
    }

    public get correo() : string {
        return this._correo;
    }

    public get direccion() : string {
        return this._direccion;
    }

    public get nombreMascota() : string {
        return this._nombreMascota;
    }

    public get edad() : number {
        return this._edad;
    }

    public get especie() : string {
        return this._especie;
    }

    public get estadoVacunacion() : string {
        return this._estadoVacunacion;
    }

    public get raza() : string {
        return this._raza;
    }

    public get motivoConsulta() : string {
        return this._motivoConsulta;
    }

    public get sexo() : string {
        return this._sexo;
    }

    public get tipoCita() : string {
        return this._tipoCita;
    }

    public get hora() : string {
        return this._hora;
    }

    public get fecha() : string {
        return this._fecha;
    }

    public set IdUsuario(IdUsuario: string){
        this._IdUsuario = IdUsuario;
    }

    public set nombre(nombre : string) {
        this._nombre = nombre;
    }

    public set telefono(telefono : string) {
        this._telefono = telefono;
    }

    public set correo(correo : string) {
        this._correo = correo;
    }

    public set direccion(direccion : string) {
        this._direccion = direccion;
    }

    public set nombreMascota(nombreMascota : string) {
        this._nombreMascota = nombreMascota;
    }

    public set edad(edad : number) {
        this._edad = edad;
    }

    public set especie(especie : string) {
        this._especie = especie;
    }

    public set estadoVacunacion(estadoVacunacion : string) {
        this._estadoVacunacion = estadoVacunacion;
    }

    public set raza(raza : string) {
        this._raza = raza;
    }

    public set motivoConsulta(motivoConsulta : string) {
        this._motivoConsulta = motivoConsulta;
    }

    public set sexo(sexo : string) {
        this._sexo = sexo;
    }

    public set tipoCita(tipoCita : string) {
        this._tipoCita = tipoCita;
    }

    public set hora(hora : string) {
        this._hora = hora;
    }

    public set fecha(fecha : string) {
        this._fecha = fecha;
    }
}

export default Schedule;

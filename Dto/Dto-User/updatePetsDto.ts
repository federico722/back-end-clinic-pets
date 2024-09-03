class updatePets {
    private _IdMascota: string;
    private _nombre: string;
    private _imagen: string;
    private _edad: string;
    private _sexo: string;
    private _raza: string;
    private _estadoVacunacion: string;
    private _esterilizacionMascota: string;
    private _telefono: string;
    private _ubicacion: string;
    private _historia: string;

    constructor (
        IdMascota: string, nombre: string, imagen: string, edad: string, sexo: string, 
        raza: string, estadoVacunacion: string, esterilizacionMascota: string, telefono: string, ubicacion: string,
        historia: string
    ){
        this._IdMascota = IdMascota;
        this._nombre = nombre;
        this._imagen = imagen;
        this._edad = edad;
        this._sexo = sexo;
        this._raza = raza;
        this._estadoVacunacion = estadoVacunacion;
        this._esterilizacionMascota = esterilizacionMascota;
        this._telefono = telefono;
        this._ubicacion = ubicacion;
        this._historia = historia;
    }

    

    // getters
    public get IdMascota(){
        return this._IdMascota;
    }


    public get nombre(){
        return this._nombre
    }

    public get imagen() {
        return this._imagen;
    }

    public get edad() {
        return this._edad;
    }

    public get sexo() {
        return this._sexo;
    }

    public get raza() {
        return this._raza;
    }

    public get estadoVacunacion() {
        return this._estadoVacunacion;
    }

    public get esterilizacionMascota() {
        return this._esterilizacionMascota;
    }

    public get telefono() {
        return this._telefono;
    }

    public get ubicacion() {
        return this._ubicacion;
    }

    public get historia() {
        return this._historia;
    }



    // setters
    public set IdMascota(IdMascota: string){
        this._IdMascota = IdMascota;
    }


    public set nombre(nombre: string){
        this._nombre = nombre;
    }

    public set imagen(imagen: string) {
        this._imagen = imagen;
    }

    public set edad(edad: string) {
        this._edad = edad;
    }

    public set sexo(sexo: string) {
        this._sexo = sexo;
    }

    public set raza(raza: string) {
        this._raza = raza;
    }

    public set estadoVacunacion(estadoVacunacion: string) {
        this._estadoVacunacion = estadoVacunacion;
    }

    public set esterilizacionMascota(esterilizacionMascota: string) {
        this._esterilizacionMascota = esterilizacionMascota;
    }

    public set telefono(telefono: string) {
        this._telefono = telefono;
    }

    public set ubicacion(ubicacion: string) {
        this._ubicacion = ubicacion;
    }

    public set historia(historia: string) {
        this._historia = historia;
    }
    
}

export default updatePets
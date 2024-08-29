class addPet {
    private _IdUsuario: string;
    private _imagen: string;
    private _nombre: string;
    private _edad: string;
    private _especie: string;
    private _raza: string;
    private _sexo: string;
    private _esterilizacion: string;
    private _estadoDeVacunacion: string;
    private _telefono: string;
    private _ubicacion: string;
    private _historia: string;

    constructor(
        IdUsuario: string, imagen: string, nombre: string, edad: string, especie: string, raza: string,
        sexo: string, esterilizacion: string, estadoDeVacunacion: string, telefono: string,
        ubicacion: string, historia: string
    ){

        this._IdUsuario = IdUsuario;
        this._imagen = imagen;
        this._nombre = nombre;
        this._edad = edad;
        this._especie = especie;
        this._raza = raza;
        this._sexo = sexo;
        this._esterilizacion = esterilizacion;
        this._estadoDeVacunacion = estadoDeVacunacion;
        this._telefono = telefono;
        this._ubicacion = ubicacion;
        this._historia = historia;

    }

    //Getters
    public get IdUsuario(): string {
        return this._IdUsuario;
    }

    // Getters
    public get imagen(): string {
        return this._imagen;
    } 

    public get nombre(): string {
        return this._nombre;
    }

    public get edad(): string {
        return this._edad;
    }

    public get especie(): string {
        return this._especie;
    }

    public get raza(): string {
        return this._raza;
    }

    public get sexo(): string {
        return this._sexo;
    }

    public get esterilizacion(): string {
        return this._esterilizacion;
    }

    public get estadoDeVacunacion(): string {
        return this._estadoDeVacunacion;
    }

    public get telefono(): string {
        return this._telefono;
    }

    public get ubicacion(): string {
        return this._ubicacion;
    }

    public get historia(): string {
        return this._historia;
    }


    // Setters
    public set IdUsuario(IdUsuario: string){
        this._IdUsuario = IdUsuario;
    }


    public set imagen(imagen: string) {
        this._imagen = imagen;
    } 

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public set edad(edad: string) {
        this._edad = edad;
    }

    public set especie(especie: string) {
        this._especie = especie;
    }

    public set raza(raza: string) {
        this._raza = raza;
    }

    public set sexo(sexo: string) {
        this._sexo = sexo;
    }

    public set esterilizacion(esterilizacion: string) {
        this._esterilizacion = esterilizacion;
    }

    public set estadoDeVacunacion(estadoDeVacunacion: string) {
        this._estadoDeVacunacion = estadoDeVacunacion;
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

export default addPet;
class User {
    private _numeroDeDocumento: string;
    private _nombre: string;
    private _apellido: string;
    private _numeroDeTelefono: string;
    private _email: string;
    private _contrasenia: string;

    constructor(
        numeroDeDocumento: string, 
        nombre: string, 
        apellido: string,
        numeroDeTelefono: string,
        email: string, 
        contrasenia: string
    ) {
        this._numeroDeDocumento = numeroDeDocumento;
        this._nombre = nombre;
        this._apellido = apellido;
        this._numeroDeTelefono = numeroDeTelefono;
        this._email = email;
        this._contrasenia = contrasenia;
    }

    //Getters

    get numeroDeDocumento(): string {
        return this._numeroDeDocumento;
    }

    get nombre(): string{
        return this._nombre;
    }

    get apellido(): string{
        return this._apellido;
    }

    get numeroDeTelefono(): string {
        return this._numeroDeTelefono;
    }

    get email(): string{
        return this._email;
    }

    get contrasenia(): string{
        return this._contrasenia;
    }

    // Setters
    set numeroDeDocumento(numeroDeDocumento: string){
        this._numeroDeDocumento = numeroDeDocumento;
    }
    
    set nombre(nombre: string){
        this._nombre = nombre;
    }

    set apellido(apellido: string){
        this._apellido = apellido;
    }

    set numeroDeTelefono(numeroDeTelefono: string){
        this._numeroDeTelefono = numeroDeTelefono;
    }

    set email(email: string){
        this._email = email;
    }

    set contrasenia(contrasenia: string){
        this._contrasenia = contrasenia;
    }
}

export default User;
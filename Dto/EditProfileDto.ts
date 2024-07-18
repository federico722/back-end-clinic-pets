class Profile {
    private _nombre: string;
    private _apellido: string;
    private _numeroDeDocumento: string;
    private _numeroDeTelefono: string;
    private _email: string;   
    private _numeroDocumentoAntiguo: string;
    constructor(
        nombre: string,
        apellido: string,
        numeroDeDocumento: string,
        numeroDeTelefono: string,
        email: string,
        numeroDocumentoAntiguo: string
    ) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._numeroDeDocumento = numeroDeDocumento;
        this._numeroDeTelefono = numeroDeTelefono;
        this._email = email;
        this._numeroDocumentoAntiguo = numeroDocumentoAntiguo;
    }
    
    public get nombre() : string {
        return this._nombre;
    }

    public get apellido() : string {
        return this._apellido;
    }

    public get numeroDeDocumento() : string {
        return this._numeroDeDocumento;
    }
    
    public get numeroDeTelefono() : string {
        return this._numeroDeTelefono;
    }
    
    public get email() : string {
        return this._email;
    }
    
    public get numeroDocumentoAntiguo() : string {
        return this._numeroDocumentoAntiguo;
    }
      
    



    public set nombre(nombre : string) {
        this._nombre = nombre;
    }
    
    public set apellido(apellido : string) {
        this._apellido = apellido;
    }

    public set numeroDeDocumento(numeroDocumento : string) {
        this._numeroDeDocumento = numeroDocumento;
    }

    public set numeroDeTelefono(numeroDeTelefono : string) {
        this._numeroDeTelefono = numeroDeTelefono;
    }
    
    public set email(email : string) {
        this._email = email;
    }
    
    public set numeroDocumentoAntiguo(numeroDocumentoAntiguo : string) {
        this._numeroDocumentoAntiguo = numeroDocumentoAntiguo;
    }
}

export default Profile;
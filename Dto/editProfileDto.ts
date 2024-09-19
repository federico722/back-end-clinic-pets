class Profile {
    private _nombre: string;
    private _apellido: string;
   // private _numeroDeDocumento: string;
    private _numeroDeTelefono: string;
    private _email: string;   
    private _IdUsuario: string;
    private _imagenPerfil: string;
    
    constructor(
        nombre: string,
        apellido: string,
      //  numeroDeDocumento: string,
        numeroDeTelefono: string,
        email: string,
        IdUsuario: string,
        imagenPerfil: string
    ) {
        this._nombre = nombre;
        this._apellido = apellido;
       // this._numeroDeDocumento = numeroDeDocumento;
        this._numeroDeTelefono = numeroDeTelefono;
        this._email = email;
        this._IdUsuario = IdUsuario;
        this._imagenPerfil = imagenPerfil
    }
    
    public get nombre() : string {
        return this._nombre;
    }

    public get apellido() : string {
        return this._apellido;
    }

   /* public get numeroDeDocumento() : string {
        return this._numeroDeDocumento;
    }*/
    
    public get numeroDeTelefono() : string {
        return this._numeroDeTelefono;
    }
    
    public get email() : string {
        return this._email;
    }
    
    public get IdUsuario() : string {
        return this._IdUsuario;
    }

    public get imagenPerfil(): string {
        return this._imagenPerfil;
    }
      
    



    public set nombre(nombre : string) {
        this._nombre = nombre;
    }
    
    public set apellido(apellido : string) {
        this._apellido = apellido;
    }

   /* public set numeroDeDocumento(numeroDocumento : string) {
        this._numeroDeDocumento = numeroDocumento;
    } */

    public set numeroDeTelefono(numeroDeTelefono : string) {
        this._numeroDeTelefono = numeroDeTelefono;
    }
    
    public set email(email : string) {
        this._email = email;
    }
    
    public set IdUsuario(IdUsuario : string) {
        this._IdUsuario = IdUsuario;
    }

    public set imagenPerfil(imagenPerfil: string){
        this._imagenPerfil = imagenPerfil;
    }
}

export default Profile;
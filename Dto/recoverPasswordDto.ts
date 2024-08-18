class recoverPassword {
    private _contrasenaUsuario: string;
    private _correoUsuario: string;

    constructor (
        contrasenaUsuario: string,
        correoUsuario: string
    ){
        this._contrasenaUsuario = contrasenaUsuario;
        this._correoUsuario = correoUsuario;

    }

    //Getters
    get contrasenaUsuario(): string{
      return this._contrasenaUsuario;
    }

    get correoUsuario(): string {
        return this._correoUsuario;
    }

    //Setters
    set contrasenaUsuario(contrasenaUsuario: string) {
        this._contrasenaUsuario = contrasenaUsuario;
    }

    set correoUsuario(correoUsuario: string){
        this._correoUsuario = correoUsuario;
    }
}

export default recoverPassword;
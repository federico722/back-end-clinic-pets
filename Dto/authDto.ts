class Auth {
    private _email: string;
    private _contrasenia: string;
    constructor(
        email: string, contrasenia: string
    ){
        this._email = email;
        this._contrasenia = contrasenia;

    }

    //Getters

    get email(): string{
        return this._email;
    }

    get contrasenia(): string{
        return this._contrasenia;
    }

    //Setters
    set email(email: string){
        this._email = email;
    }

    set contrasenia(contrasenia: string){
        this._contrasenia = contrasenia;
    }
}

export default Auth;
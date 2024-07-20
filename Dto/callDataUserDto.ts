class callDataUser {
    private _IdUsuario;

    constructor (
        IdUsuario: string
    ){
        this._IdUsuario = IdUsuario
    }



    public get IdUsuario() : string {
        return this._IdUsuario;
    }

    

    public set IdUsuario(IdUsuario: string){
        this._IdUsuario = IdUsuario
    }
 
}

export default callDataUser;
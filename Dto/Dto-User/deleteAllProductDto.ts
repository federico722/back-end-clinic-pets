class deleteAllProduct {
    private _IdUsuario: string

    constructor(
        IdUsuario: string
    ){
        this._IdUsuario = IdUsuario;
    }

    //Getters 
    get IdUsuario(): string{
        return this._IdUsuario;
    }

    //Setters
    set IdUsuario(IdUsuario: string){
       this._IdUsuario = IdUsuario;
    }
}

export default deleteAllProduct;


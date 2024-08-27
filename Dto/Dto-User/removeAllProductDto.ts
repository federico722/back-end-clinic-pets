class removeAllProduct {
    private _IdUsuario: string;

    constructor(
        IdUsuario: string,
    ){
        this._IdUsuario = IdUsuario;
    }

    //Getters
    public get IdUsuario(): string {
       return this._IdUsuario;
    }

    //Setters
    public set IdUsuario(IdUsuario: string){
        this._IdUsuario = IdUsuario;
    }
}

export default removeAllProduct;
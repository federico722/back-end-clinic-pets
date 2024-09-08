class uploadProductId{
    private _IdProducto: string;

    constructor(
        IdProducto: string
    ){
        this._IdProducto = IdProducto

    }

    //Getters 
    public get IdProducto (): string {
        return this._IdProducto;
    }

    //Setters
    public set IdProducto (IdProducto: string) {
        this._IdProducto = IdProducto;
    }
}

export default uploadProductId;
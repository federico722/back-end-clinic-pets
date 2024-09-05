class uploadProductId{
    private _IdProducto: number;

    constructor(
        IdProducto: number
    ){
        this._IdProducto = IdProducto

    }

    //Getters 
    public get IdProducto (): number {
        return this._IdProducto;
    }

    //Setters
    public set IdProducto (IdProducto: number) {
        this._IdProducto = IdProducto;
    }
}

export default uploadProductId;
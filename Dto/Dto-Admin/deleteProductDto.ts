class deleteProduct {
    private _IdProducto: string;
    private _nombreProducto: string;

    constructor(
        IdProducto: string, nombreProducto: string
    ){
        this._IdProducto = IdProducto;
        this._nombreProducto = nombreProducto;

    }

    //getters
    public get IdProducto (): string{ 
        return this._IdProducto;
    }

    public get nombreProducto(): string {
        return this._nombreProducto;
    }

    //Setters
    public set IdProducto (IdProducto: string){
        this._IdProducto = IdProducto;
    }

    public set nombreProducto (nombreProducto: string) {
        this._nombreProducto = nombreProducto;
    }


}

export default deleteProduct;
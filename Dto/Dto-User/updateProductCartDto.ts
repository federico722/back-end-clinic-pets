class updateProductCart {
    private _IdUsuarioProducto: string;
    private _cantidad: number;
   
    constructor (
        IdUsuarioProducto: string,
        cantidad: number,
    ){
        this._IdUsuarioProducto = IdUsuarioProducto;
        this._cantidad = cantidad;

    }

    //Getters 
    public get IdUsuarioProducto(): string {
        return this._IdUsuarioProducto;
    }

    public get cantidad(): number {
        return this._cantidad;
    }

    
    //Setters 
    public set IdUsuarioProducto(IdUsuarioProducto: string) {
        this._IdUsuarioProducto = IdUsuarioProducto
    }


    public set cantidad(cantidad: number) {
        this._cantidad = cantidad;
    }
}

export default updateProductCart
class addProductCart {

    private _IdUsuario: string;
    private _IdProducto: string;
    private _imagenProducto: string;
    private _nombre: string;
    private _precioUnitario: number;
    private _precioTotal: number;
    private _cantidad: number;
   
    constructor (
        IdUsuario: string, 
        IdProducto: string, 
       imagenProducto: string, 
        nombre: string, 
        precioUnitario: number,
        precioTotal: number,
        cantidad: number,
    ){
        this._IdUsuario = IdUsuario;
        this._IdProducto = IdProducto;
        this._imagenProducto = imagenProducto;
        this._nombre = nombre;
        this._precioUnitario = precioUnitario;
        this._precioTotal = precioTotal;
        this._cantidad = cantidad;

    }

    //Getters 
    public get IdUsuario(): string {
        return this._IdUsuario;
    }

    public get IdProducto(): string {
        return this._IdProducto;
    }

    public get imagenProducto(): string {
        return this._imagenProducto;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get precioUnitario(): number {
        return this._precioUnitario;
    }

    public get precioTotal(): number {
        return this._precioTotal;
    }

    public get cantidad(): number {
        return this._cantidad;
    }

    
    //Setters 
    public set IdUsuario(IdUsuario: string){
        this._IdUsuario = IdUsuario;
    }

    public set IdProducto(IdProducto: string){
        this._IdProducto = IdProducto;  
    }


    public set imagenProducto(imagenProducto: string) {
        this._imagenProducto = imagenProducto;
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public set precioUnitario(precioUnitario: number) {
        this._precioUnitario = precioUnitario;
    }

    public set precioTotal(precioTotal: number) {
        this._precioTotal = precioTotal;
    }

    public set cantidad(cantidad: number) {
        this._cantidad = cantidad;
    }

}

export default addProductCart;
class addProductCart {
    private _imagenProducto: string;
    private _nombre: string;
    private _precio: string;
    private _cantidad: string;
   
    constructor (
        imagenProducto: string, nombre: string, precio: string,
        cantidad: string,
    ){
        this._imagenProducto = imagenProducto;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;

    }

    //Getters 
    public get imagenProducto(): string {
        return this._imagenProducto;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get precio(): string {
        return this._precio;
    }

    public get cantidad(): string {
        return this._cantidad;
    }

    
    //Setters 
    public set imagenProducto(imagenProducto: string) {
        this._imagenProducto = imagenProducto;
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public set precio(precio: string) {
        this._precio = precio;
    }

    public set cantidad(cantidad: string) {
        this._cantidad = cantidad;
    }

}
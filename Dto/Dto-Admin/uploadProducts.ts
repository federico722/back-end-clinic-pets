class uploadProducts {
    private _imagenProducto: string;
    private _nombre: string;
    private _precio: string;
    private _cantidad: string;
    private _categoria: string;

    constructor(
        imagenProducto: string, nombre: string, precio: string,
        cantidad: string, categoria: string
    ){
        this._imagenProducto = imagenProducto;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
        this._categoria = categoria;

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

    public get categoria(): string {
        return this._categoria;
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

    public set categoria(categoria: string) {
        this._categoria = categoria;
    }
}


export default uploadProducts;
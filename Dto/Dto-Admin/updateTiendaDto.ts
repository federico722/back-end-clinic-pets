class updateProduct {
    private _imagenProducto: string;
    private _nombre: string;
    private _precio: number;
    private _descripcion: string;
    private _informacion: string;
    private _stock: number;
    private _categoria: string;
    private _seleccionTallaPresentacion: string;
    private _IdProducto: string;
 

    constructor(
        imagenProducto: string, nombre: string, precio: number, descripcion: string, informacion: string,
        stock: number, categoria: string, seleccionTallaPresentacion: string, IdProducto: string

    ) {
        this._imagenProducto = imagenProducto;
        this._nombre = nombre;
        this._precio = precio;
        this._descripcion = descripcion;
        this._informacion = informacion;
        this._stock = stock;
        this._categoria = categoria;
        this._seleccionTallaPresentacion= seleccionTallaPresentacion;
        this._IdProducto= IdProducto;
    }

     //Getters   

     public get imagenProducto(): string {
        return this._imagenProducto;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get precio(): number {
        return this._precio;
    }

    public get descripcion(): string {
        return this._descripcion;
    }

    public get informacion(): string {
        return this._informacion;
    }

    public get stock(): number {
        return this._stock;
    }

    public get categoria(): string {
        return this._categoria;
    }

    public get seleccionTallaPresentacion(): string {
        return this._seleccionTallaPresentacion
    }

    public get IdProducto(): string {
        return this._IdProducto
    }



    //Setters

    public set imagenProducto(imagenProducto: string) {
        this._imagenProducto = imagenProducto;
    } 

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public set precio(precio: number) {
        this._precio = precio;
    }

    public set descripcion(descripcion: string) {
        this._categoria = descripcion;
    }

    public set informacion(informacion: string){
        this._informacion = informacion;
    }

    public set stock(stock: number) {
        this._stock = stock;
    }

    public set categoria(categoria: string) {
        this._categoria = categoria;
    }

    public set seleccionTallaPresentacion(seleccionTallaPresentacion: string){
        this._seleccionTallaPresentacion = seleccionTallaPresentacion;
    }

    public set IdProducto(IdProducto: string){
        this._IdProducto = IdProducto;
    }
}

export default updateProduct;
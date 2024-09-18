class GetComentarios {
    private _IdBuscarMascota: number;
    constructor(IdBuscarMascota: number) {
        this._IdBuscarMascota = IdBuscarMascota;
    }


    
    public get IdBuscarMascota() : number {
        return this._IdBuscarMascota;
    }
    
    public set IdBuscarMascota(IdBuscarMascota : number) {
        this._IdBuscarMascota = IdBuscarMascota;
    }
}

export default GetComentarios;
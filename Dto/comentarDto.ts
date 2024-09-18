class AddComentario {
    private _IdUsuario: string;
    private _IdBuscarMascota: number;
    private _comentario: string;
    constructor( 
        IdUsuario: string,
        IdBuscarMascota: number,
        comentario: string
    ) {
        this._IdUsuario = IdUsuario;
        this._IdBuscarMascota = IdBuscarMascota;
        this._comentario = comentario
    }

    
    public get IdUsuario() : string {
        return this._IdUsuario;
    }
    
    public get IdBuscarMascota() : number {
        return this._IdBuscarMascota;
    }
    
    public get comentario() : string {
        return this._comentario
    }
    
    
    public set IdUsuario(IdUsuario : string) {
        this._IdUsuario = IdUsuario;
    }
    
    public set IdBuscarMascota(IdBuscarMascota : number) {
        this._IdBuscarMascota = IdBuscarMascota;
    }
    
    public set comentario(comentario : string) {
        this._comentario = comentario;
    }
}

export default AddComentario;
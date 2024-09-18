
class GetIds {
    private _idCita: number;
    private _IdUsuario: string
    
    constructor(idCita: number, IdUsuario: string) {
        this._idCita = idCita;
        this._IdUsuario = IdUsuario;
    }

    
    public get idCita() : number {
        return this._idCita
    }
    
    public get IdUsuario() : string {
        return this._IdUsuario;
    }
    
    public set idCita(idCita : number) {
        this._idCita = idCita;
    }
    
    public set IdUsuario(IdUsuario : string) {
        this._IdUsuario = IdUsuario;
    }
}

export default GetIds;
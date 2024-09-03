class VeterinaryStatus {
    private _IdVeterinario: string;
    constructor(IdVeterinario: string) {
        this._IdVeterinario = IdVeterinario;
    }

    
    public get IdVeterinario() : string {
        return this._IdVeterinario;
    }
    
    public set IdVeterinario(IdVeterinario : string) {
        this._IdVeterinario = IdVeterinario;
    }
}

export default VeterinaryStatus;
class Id {
    private _IdUsuario: string;

    constructor(IdUsuario: string) {
        this._IdUsuario = IdUsuario;
    }

    public get IdUsuario(): string {
        return this._IdUsuario;
    }

    public set IdUsuario(IdUsuario: string) {
        this._IdUsuario = IdUsuario;
    }
}

export default Id;

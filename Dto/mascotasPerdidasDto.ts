class MascotasPerdidas {
    private _IdUsuario: string;
    private _imagenMascota: string;
    private _nombreMascota: string;
    private _infoMascota: string;
    private _numeroTelefono: string;

    constructor(
        IdUsuario: string,
        imagenMascota: string,
        nombreMascota: string,
        infoMascota: string,
        numeroTelefono: string
    ) {
        this._IdUsuario = IdUsuario;
        this._imagenMascota = imagenMascota;
        this._nombreMascota = nombreMascota;
        this._infoMascota = infoMascota;
        this._numeroTelefono = numeroTelefono;
    }

    
    public get IdUsuario() : string {
        return this._IdUsuario;
    }
    
    public get imagenMascota() : string {
        return this._imagenMascota;
    }
    
    public get nombreMascota() : string {
        return this._nombreMascota;
    }
    
    public get infoMascota() : string {
        return this._infoMascota;
    }
    
    public get numeroTelefono() : string {
        return this._numeroTelefono
    }
    
    
    
    public set IdUsuario(IdUsuario : string) {
        this._IdUsuario = IdUsuario;
    }
    
    public set imagenMascota(imagenMascota : string) {
        this._imagenMascota = imagenMascota;
    }
    
    public set nombreMascota(nombreMascota : string) {
        this._nombreMascota = nombreMascota;
    }
    
    public set infoMascota(infoMascota : string) {
        this._infoMascota = infoMascota;
    }
    
    public set numeroTelefono(numeroTelefono : string) {
        this._numeroTelefono = numeroTelefono;
    }
    
}

export default MascotasPerdidas;
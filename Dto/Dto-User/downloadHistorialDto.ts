class DownloadHistorial {
    private _idCita: string;
    constructor(idCita: string) {
        this._idCita = idCita;
    }


    
    public get idCita() : string {
        return this._idCita;
    }
     
    public set idCita(idCita : string) {
        this._idCita = idCita;
    }
}


export default DownloadHistorial;
class  CancelAppointment{
    private _idCita: string;
    private _estado: string;

    constructor(
        idCita: string, estado: string)
    {
        this._idCita = idCita;
        this._estado = estado
    }

    
    public get idCita() : string {
        return this._idCita;
    }
    
    public get estado() : string {
        return this._estado;
    }
    
    

    
    public set idCita(idCita : string) {
        this._idCita = idCita;
    }
    
    public set estado(estado : string) {
        this._estado = estado;
    }
}

export default CancelAppointment;
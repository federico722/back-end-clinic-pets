class UpdateAppointment {
    private _idCita: string;
    private _fecha: string;
    private _hora: string;

    constructor(
        idCita: string, fecha: string, hora: string)
    {
        this._idCita = idCita;
        this._fecha = fecha;
        this._hora = hora;
    }

  
     //Getters
     
     public get idCita() : string {
        return this._idCita;
     }
     
     public get fecha() : string {
        return this._fecha;
    }
    
    public get hora() : string {
        return this._hora;
    }
    

    
    //Setters
    
    public set idCita(idCita : string) {
        this._idCita = idCita;
    }
    
    public set fecha(fecha: string){
        this._fecha = fecha;
    }
    
    public set hora(hora : string) {
        this._hora = hora;
    }
}

export default UpdateAppointment;
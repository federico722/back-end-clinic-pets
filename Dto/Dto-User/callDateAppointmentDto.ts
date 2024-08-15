class CallDateAppointment {
    private _fecha: string;

    constructor(
        IdUsuario: string
    ){
        this._fecha = IdUsuario;

    }

  
     //Getters
     public get fecha() : string {
        return this._fecha;
    }

    
    //Setters
    public set fecha(fecha: string){
        this._fecha = fecha;
    }
 
}

export default CallDateAppointment;
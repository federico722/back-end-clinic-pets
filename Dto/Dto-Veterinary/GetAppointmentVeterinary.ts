class GetAppointment {
    private _fecha: string;
    constructor(fecha: string) {
        this._fecha = fecha
    }



    public get fecha() : string {
        return this._fecha;
    }
    
    public set fecha(fecha : string) {
        this._fecha = fecha;
    }
}

export default GetAppointment;
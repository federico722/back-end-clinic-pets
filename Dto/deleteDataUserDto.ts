class deleteDataUser {

    private _IdCita: string

    constructor (
        IdCita: string
    ){
        this._IdCita = IdCita

    }

    //Getters
    public get IdCita(): string{
          return this._IdCita;
    }


    //Setters
    public set IdCita( IdCita: string){
        this._IdCita = IdCita;
    }

}

export default deleteDataUser;
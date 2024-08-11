class signOff {

    private _IdUsuario: string;
    
      

    constructor (
       IdUsuario: string

    ) {

        this._IdUsuario = IdUsuario;

    }


    //setters
     public get IdUsuario() : string {
        return this._IdUsuario;
     }


    //getters
    public set IdUsuario(IdUsuario: string){
        this._IdUsuario = IdUsuario;
    }
}

export default signOff;
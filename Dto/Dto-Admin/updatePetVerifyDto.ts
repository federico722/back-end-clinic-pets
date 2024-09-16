class updatePetVerify {
    private _IdAdopcionMascota: string;

    constructor(
        IdAdopcionMascota: string
    ){
      this._IdAdopcionMascota = IdAdopcionMascota;
    }

    //Getters
    public get IdAdopcionMascota(): string {
        return this._IdAdopcionMascota;
    }

    //Setters
    public set IdAdopcionMascota(IdAdopcionMascota: string){
       this._IdAdopcionMascota = IdAdopcionMascota;
    }
}

export default updatePetVerify;
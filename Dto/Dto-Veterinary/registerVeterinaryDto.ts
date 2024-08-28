class veterinary {
    private _idVeterinario: string;
  //  private _idAdministrador: string;
    private _nombre: string;
    private _apellido: string;
    private _telefono: string;
    private _email: string;
    private _contrasenia: string;

    constructor( 
        idVeterinario: string, /*idAdministrador: string */nombre: string, apellido: string, telefono: string,
        email: string, contrasenia: string
    ) 
    {
        this._idVeterinario = idVeterinario;
       // this._idAdministrador = idAdministrador;
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._email = email;
        this._contrasenia = contrasenia;
    }

     //Getters
     get idVeterinario(): string{
        return this._idVeterinario;
    }

    /*
    get idAdministrador(): string{
        return this._idAdministrador;
    }  */


     get nombre(): string{
        return this._nombre;
    }

    get apellido(): string{
        return this._apellido;
    }

    get telefono(): string {
        return this._telefono;
    }

    get email(): string{
        return this._email;
    }

    get contrasenia(): string{
        return this._contrasenia;
    }

    // Setters
    set idVeterinario(idVeterinario: string){
        this._idVeterinario = idVeterinario
    }

    /*
    set idAdministrador(idAdministrador: string){
        this._idAdministrador = idAdministrador;
    }  */

    set nombre(nombre: string){
        this._nombre = nombre;
    }

    set apellido(apellido: string){
        this._apellido = apellido;
    }

    set telefono(telefono: string){
        this._telefono = telefono
    }

    set email(email: string){
        this._email = email;
    }

    set contrasenia(contrasenia: string){
        this._contrasenia = contrasenia;
    }
}

export default veterinary;
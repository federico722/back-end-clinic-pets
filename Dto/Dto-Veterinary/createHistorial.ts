class createHistorial {

    // Informacion del propietario
    private _nombre: string;
    private _telefono: string;
    private _direccion: string;
    private _email: string;

    // Informacion de la mascota 
    private _nombreMascota: string;
    private _edadMascota: string;
    private _estadoDeVacunacion: string;
    private _especie: string;
    private _raza: string;
    private _tipoDeCita: string;

    // Informacion del veterinario
    private _nombreVeterinario: string;
    private _tituloEspecialidad: string;
    private _especialidadMedicina: string;
    private _telefonoVeterinario: string; 
    private _emailVeterinario: string;

    //campos de historial 
    private _motivoConsulta: string;
    private _tratamiento: string;
    private _diagnostico: string;
    private _examenMedico: string;

    constructor(
        //Informacion del propietario
        nombre: string, telefono: string, direccion: string, email: string,
        // Informacion de la mascota 
        nombreMascota: string, edadMascota: string, estadoDeVacunacion: string, especie: string, raza: string, tipoDeCita: string,
        // Informacion del veterinario
        nombreVeterinario: string, tituloEspecialidad: string, especialidadMedicina: string, telefonoVeterinario: string, emailVeterinario: string,
        //campos de historial 
        motivoConsulta: string, tratamiento: string, diagnostico: string, examenMedico: string
    ){
    // Informacion del propietario 
       this._nombre = nombre;
       this._telefono = telefono;
       this._direccion = direccion;
       this._email = email;

    // Informacion de la mascota 
       this._nombreMascota = nombreMascota;
       this._edadMascota = edadMascota;
       this._estadoDeVacunacion = estadoDeVacunacion;
       this._especie = especie;
       this._raza = raza;
       this._tipoDeCita = tipoDeCita;
    
    // Informacion del veterinario
       this._nombreVeterinario = nombreVeterinario;
       this._tituloEspecialidad = tituloEspecialidad;
       this._especialidadMedicina = especialidadMedicina;
       this._telefonoVeterinario = telefonoVeterinario;
       this._emailVeterinario = emailVeterinario;

    // campos de historial 
       this._motivoConsulta = motivoConsulta;
       this._tratamiento = tratamiento;
       this._diagnostico = diagnostico;
       this._examenMedico = examenMedico;
    }


    // getters

    //Informacion del propietario 
    public get nombre(): string {
        return this._nombre;
    }

    public get telefono(): string {
        return this._telefono;
    }

    public get direccion(): string {
        return this._direccion;
    }

    public get email(): string {
        return this._email;
    }

    // Informacion de la mascota 
    public get nombreMascota(): string {
        return this._nombreMascota;
    }

    public get edadMascota(): string {
        return this._edadMascota;
    }

    public get estadoDeVacunacion(): string {
        return this._estadoDeVacunacion;
    }

    public get especie(): string {
        return this._especie;
    }

    public get raza(): string {
        return this._raza;
    }

    public get tipoDeCita(): string {
        return this._tipoDeCita;
    }

    // Informacion del veterinario
    public get  nombreVeterinario(): string {
        return this._nombreVeterinario;
    }

    public get tituloEspecialidad(): string{
        return this._tituloEspecialidad;
    }

    public get especialidadMedicina(): string {
        return this._especialidadMedicina;
    }

    public get telefonoVeterinario(): string {
        return this._telefonoVeterinario;
    }

    public get emailVeterinario(): string {
        return this._emailVeterinario
    }


    //campos de historial 
    public get motivoConsulta(): string {
        return this._motivoConsulta;
    }

    public get tratamiento(): string {
        return this._tratamiento;
    }

    public get diagnostico(): string {
        return this._diagnostico;
    }

    public get examenMedico(): string {
        return this._examenMedico;
    }

    //Setters

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public set telefono(telefono: string){
        this._telefono = telefono;
    }

    public set direccion(direccion: string) {
        this._direccion = direccion;
    }

    public set email(email: string) {
        this._email = email;
    }

    //Informacion de la mascota 
    public set nombreMascota(nombreMascota: string) {
        this._nombreMascota = nombreMascota;
    }

    public set edadMascota(edadMascota: string) {
        this._edadMascota = edadMascota;
    }

    public set estadoDeVacunacion(estadoDeVacunacion: string) {
        this._estadoDeVacunacion = estadoDeVacunacion;
    }

    public set especie(especie: string) {
        this._especie = especie;
    }

    public set raza(raza: string) {
        this._raza = raza;
    }

    public set tipoDeCita(tipoDeCita: string) {
        this._tipoDeCita = tipoDeCita;
    }

    //Informacion del veterinario
    public set nombreVeterinario(nombreVeterinario: string) {
        this._nombreVeterinario = nombreVeterinario;
    }

    public set tituloEspecialidad(tituloEspecialidad: string) {
        this._tituloEspecialidad = tituloEspecialidad;
    }

    public set especialidadMedicina(especialidadMedicina: string) {
        this._especialidadMedicina = especialidadMedicina;
    }

    public set telefonoVeterinario(telefonoVeterinario: string)  {
        this._telefonoVeterinario = telefonoVeterinario;
    }

    public set emailVeterinario(emailVeterinario: string) {
        this._emailVeterinario = emailVeterinario;
    }

     //campos de historial 

     public set motivoConsulta(motivoConsulta: string) {
        this._motivoConsulta = motivoConsulta;
    }

    public set tratamiento(tratamiento: string) {
        this._tratamiento = tratamiento;
    }

    public set diagnostico(diagnostico: string) {
        this._diagnostico = diagnostico;
    }

    public set examenMedico(examenMedico: string) {
        this._examenMedico = examenMedico;
    }



}

export default createHistorial;
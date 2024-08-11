class recoverPassword {
    private _email: string

    constructor (
        email: string
    ){
        this._email = email

    }

    //Getters
    get email(): string{
      return this._email;
    }

    //Setters
    set email(email: string) {
        this._email = email;
    }
}

export default recoverPassword;
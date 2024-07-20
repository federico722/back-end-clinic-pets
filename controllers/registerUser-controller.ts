import { Request, Response } from "express";
import UserService from "../services/userServices";
import User from "../Dto/UserDto";


let register = async (req: Request, res: Response) => {
    try {
        const {
            numeroDeDocumento,
            nombre,
            apellido,
            numeroDeTelefono,
            email,
            contrasenia,
            confirmarContrasenia
        } =req.body
        console.log(req.body);
        
        const registerUser = await UserService.register(new User(numeroDeDocumento, nombre, apellido, numeroDeTelefono, email, contrasenia))
        console.log(registerUser);

        if (registerUser) {
            return res.status(201).json(
                { status: 'register ok'}
            );
        } else {
            return res.status(500).json(
                { status: 'el usuario ya esta registrado'}
            );
        }
        

    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }else{
            console.error(error.message);
              
        }
    }
}

export default register;
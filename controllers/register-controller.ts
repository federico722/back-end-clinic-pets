import { Request, Response } from "express";
import UserService from "../services/userServices";
import User from "../Dto/UserDto";


let register = async (req: Request, res: Response) => {
    try {
        const {
            nombre,
            apellido,
            numeroDeDocumento,
            numeroDeTelefono,
            email,
            contrasenia
        } =req.body
        const registerUser = await UserService.register(new User(nombre, apellido, numeroDeDocumento, numeroDeTelefono, email, contrasenia))
        return res.status(201).json(
            { status: 'register ok'}
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
    }
}

export default register
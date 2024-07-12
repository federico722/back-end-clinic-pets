import { Request, Response } from "express";
import veterinaryServices from "../services/veterinaryServices";
import Veterinary from "../Dto/veterinaryDto";

let registerVeterinary = async (req: Request, res: Response) => {
    try {
        const{
            idVeterinario,
            idAdministrador,
            nombre,
            apellido,
            email,
            contrasenia
        } = req.body
        console.log(req.body);

        const registerVeterinary = await veterinaryServices.registerVeterinary( new Veterinary(idVeterinario, idAdministrador, nombre, apellido, email, contrasenia));
        console.log(registerVeterinary);

        if (registerVeterinary) {
            return res.status(201).json(
                { status: 'register veterinary ok'}
            );
        } else {
            return res.status(500).json(
                { status: 'el usuario veterinario ya esta registrado'}
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

export default registerVeterinary;
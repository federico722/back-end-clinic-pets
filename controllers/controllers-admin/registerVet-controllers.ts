import { Request, Response } from "express";
import veterinary from "../../Dto/Dto-Veterinary/registerVeterinaryDto";
import VeterinaryService from "../../services/VeterinaryServices";

let registerVeterinary = async (req: Request, res: Response) => {
    try {
        
        const{
            numeroDeDocumento,
            nombre,
            apellido,
            numeroDeTelefono,
            email,
            contrasenia,
            confirmarContrasenia
        } = req.body
        console.log(req.body);
        
        
        const registerVeterinary = await VeterinaryService.registerVeterinary( new veterinary(numeroDeDocumento, nombre, apellido, numeroDeTelefono, email, contrasenia ));
        console.log(registerVeterinary);
       // console.log("no funciona registerVeterinary");
        

        if (!registerVeterinary.insertVeterinary) {
            return res.status(400).json(
                { status: registerVeterinary.status, error: registerVeterinary.errorSql }
            );
        }
        
        return res.status(200).json({
            status: "register veterinary ok"
        })
        
        
        
    } catch (error: any) {
        console.error('error en la insercion de veterinario', error);
        return res.status(500).json({
             status: 'error',
             message: 'Failed insert veterinary',
             error: error.message
        });
    }
}

export default registerVeterinary;
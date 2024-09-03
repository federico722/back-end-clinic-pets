import { Request, Response } from "express";
import UserService from "../../services/userServices";

let AskForAllPets = async (req:Request, res: Response) => {
    
    try {

    const askForAllPets: any =  await UserService.askForAllPets()

    if (!askForAllPets.callData) {

        return res.status(400).json({
           status: 'error',
           message: askForAllPets.status,
           error: askForAllPets.errorSql
        });
    }

    return res.status(200).json({
        status: 'success',
        mascotas: askForAllPets.mascotas,
        callData: askForAllPets.callData

    })

    } catch (error: any) {
        console.error('error en la peticion de las mascotas',error);
        return res.status(500).json({
            status: 'error',
            message: 'Error en la peticion, no se pudo traer la informacion de todas las mascotas',
            error: error.message
        });
    }
}

export default AskForAllPets;
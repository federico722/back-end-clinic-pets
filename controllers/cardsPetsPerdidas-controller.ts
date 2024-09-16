import {Request, Response} from "express";
import UserService from "../services/userServices";

let traerMascotasPerdidas = async (req:Request, res: Response) => {
    
    try {
           const callCardsPets: any = await UserService.mascotasPerdidas();
           console.log(callCardsPets);
           
           if (!callCardsPets.select) {
              return res.status(404).json({
                status: 'Error al obtener informacion',
                message: callCardsPets.status,
                select: callCardsPets.select
              })
           }

           return res.status(200).json({
              status: 'datos de la mascota obtenidas',
              message: callCardsPets.status,
              Result: callCardsPets.result
           })
    } catch (error: any) {
        console.error('error en el servidor', error);
        return res.status(500).json({
            status: 'Error',
            message: 'Error en el servidor no se pudo obtener la info de las adopciones',
            error: error.message
        });
        
    };
}

export default traerMascotasPerdidas;
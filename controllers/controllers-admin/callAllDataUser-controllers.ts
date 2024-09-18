import { Request, Response } from "express";
import AdminServices from "../../services/AdminServices";

let callAllData = async (req: Request, res: Response) => {
    try {
        const callAllDataUser: any = await AdminServices.callAllDateUser();
        console.log('imprimo la respuesta', callAllDataUser);
        

        if (!callAllDataUser) {
           return res.status(404).json({
                status: 'error',
                message: 'No se pudo obtener la informacion de las citas',
                select: false
            })
        }

        return res.status(200).json({
            status: 'Successfully ',
            message: 'Datos obtenidos',
            result: callAllDataUser
        })
    } catch (error: any) {
         console.error('error interno en el servidor', );
         return res.status(500).json({
            status: 'error',
            message: 'error interno del servidor',
            error: error.message
         })
    }
}

export default callAllData;
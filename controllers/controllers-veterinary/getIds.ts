import {Request, Response} from 'express';
import UserService from '../../services/userServices';
import GetIds from '../../Dto/Dto-User/idsDto';


let ids = async (req: Request, res: Response) => {
    try {
        const IdUsuario: any = req.user?.id;
        console.log('Id Usuario', IdUsuario);
        
        const {idCita} = req.query;

        const id = await UserService.getIds(new GetIds(Number(idCita), IdUsuario)); // Asegúrate de que idCita sea un número


    return res.status(200).json({
            status: id.status,
            select:  id.select,
            Result: id.result
        })
    } catch (error: any) {
        console.error('erro interno en el servidor',error);
        return res.status(500).json({
            status: 'error',
            message: 'error interno en el servidor',
            select: false,
            error: error.message
        })
    }
}

export default ids;

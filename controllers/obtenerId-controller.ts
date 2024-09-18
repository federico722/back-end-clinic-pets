import { Request, Response } from "express";
import UserService from "../services/userServices";
import Id from "../Dto/idDto";


let obtenerId = async (req: Request, res: Response) => {
    try {
        // `IdUsuario` debería ser extraído del `req.params` como en tu código
        const IdUsuario: any = req.user?.id; // Usa el id extraído del token
        let id = await UserService.obtenerId(new Id(IdUsuario));

        return res.status(200).json({
            status: id.status,
            select: id.select,
            Result: id.result
        });
    } catch (error: any) {
        console.error('Error interno en el servidor', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno en el servidor',
            select: false,
            error: error.message
        });
    }
}

export default obtenerId;
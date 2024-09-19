import {Request, Response} from 'express';
import UserService from '../services/userServices';
import AddComentario from '../Dto/comentarDto';

let comentario = async (req: Request, res: Response) => {
    try {
        const IdUsuario: any = req.user?.id;
        const {IdBuscarMascota, comentario} = req.body;
        console.log('Datos comentario', IdUsuario, IdBuscarMascota, comentario);
        
        const contenido = await UserService.addComentario(new AddComentario(IdUsuario, IdBuscarMascota, comentario));
        return res.status(200).json({
            status: 'success',
            message: contenido.status
        });
    } catch (error: any) {
        console.error('error al enviar la informacion a la tabla de productos', error);
        return res.status(500).json({
            status: 'error',
            message: 'Failed inserting data',
            error: error.message
        });
    }
}

export default comentario;



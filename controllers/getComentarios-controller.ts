import { Request, Response} from 'express'
import UserService from '../services/userServices';
import GetComentarios from '../Dto/getComentariosDto';

let getComentarios = async (req: Request, res: Response) => {
    try {
        const idBuscarMascotaParam = req.params.IdBuscarMascota;

        // Convierte el parámetro a número
        const IdBuscarMascota = Number(idBuscarMascotaParam);
        const contenido = await UserService.getComentarios(new GetComentarios(IdBuscarMascota));
        return res.status(200).json({
            status: 'comentarios obtenidos',
            message: contenido.status,
            Result: contenido.result
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

export default getComentarios;
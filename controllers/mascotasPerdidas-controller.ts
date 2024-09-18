import { Request, Response } from 'express';
import dotenv from 'dotenv';
import UserService from '../services/userServices';
import MascotasPerdidas from '../Dto/mascotasPerdidasDto';

let mascotasPerdidas = async (req: Request, res: Response) => {
    try {
        // Accede a los campos del formulario
        const {
            IdUsuario,
            nombreMascota,
            infoMascota,
            numeroTelefono,
            imagenMascota
        } = req.body;

        // Accede al archivo subido
       

        console.log('datos recibidos:', IdUsuario, imagenMascota, nombreMascota, infoMascota, numeroTelefono);

        const publicacion = await UserService.addMascotaPerdida(new MascotasPerdidas(
            IdUsuario,
            imagenMascota,
            nombreMascota,
            infoMascota,
            numeroTelefono
        ));

        return res.status(200).json({
            status: 'success',
            message: publicacion.status
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

export default mascotasPerdidas;

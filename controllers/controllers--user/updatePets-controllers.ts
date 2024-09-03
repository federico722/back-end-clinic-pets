import { Response, Request } from "express";
import UpdatePets from "../../Dto/Dto-User/updatePetsDto";
import UserService from "../../services/userServices";

let updatePets = async (req:Request, res: Response) => {
    try {
        const {
            IdMascota,
            nombre,
            imagen,
            edad,
            sexo,
            raza,
            estadoVacunacion,
            esterilizacionMascota,
            telefono,
            ubicacion,
            historia
        } = req.body

        console.log('valores de la consulta', req.body);

        const updatePets: any = await UserService.updatePets( new UpdatePets(IdMascota, nombre, imagen, edad, sexo, raza, estadoVacunacion, esterilizacionMascota, telefono, ubicacion, historia));

        console.log('Datos de updatePets:', updatePets);

        if (!updatePets.updatePets) {
            return res.status(404).json({
                status: updatePets.status,
                updatePets: updatePets.updatePets,
                error: updatePets.errorSQl
            });
        }

       return res.status(200).json({
        status: updatePets.status,
        updatePets: updatePets.updatePets
       })
        
    } catch (error: any) {
        console.error('error en la actualizacion de los datos de la mascota',error);
        return res.status(500).json({
            status: 'error',
            message: 'Failed update data pets',
            error: error.message
        });
    }
    
}

export default updatePets
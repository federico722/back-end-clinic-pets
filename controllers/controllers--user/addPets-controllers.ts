import { Request, Response } from "express";
import addPet from "../../Dto/Dto-User/addPetDto";
import UserService from "../../services/userServices";

let addPetUser = async (req: Request, res: Response) => {
     
    try {

         // Extraer el ID de usuario de la solicitud
     const IdUsuario: any = req.user?.id;

     const {
         nombre,
         edad,
         especie,
         raza,
         sexo,
         Esterilizacion,
         estadovacunacion,
         telefono,
         ubicacion,
         historia
     } = req.body

     console.log(req.body);
     
 
     if ( typeof IdUsuario !== 'string') {
         return res.status(400).json({
           status: 'error',
           message: 'User ID not found in token or has invalid type'
         })
     }
 
     const addPetUser: any = await UserService.addPetUser( new addPet(IdUsuario, nombre, edad, especie, raza, sexo, Esterilizacion, estadovacunacion, telefono, ubicacion, historia));
     console.log("datos de las mascota", addPetUser);
 
     if (!addPetUser.insertToPet) {
         return res.status(404).json({
             status: 'error',
             message: 'failed add card pet',
             error: addPetUser.insertToPet
         });
     };

     return res.status(200).json({
        status: 'success',
        message: addPetUser.status,
        insertCardPet: addPetUser.insertToPet
     });
        
    } catch (error: any) {
        console.error('error en la insercion de datos en la tabla adopcion mascota', error);
        return res.status(500).json({
             status: 'error',
             message: 'Failed insert card data',
             error: error.message
        });
          
    };
     
};

export default addPetUser;
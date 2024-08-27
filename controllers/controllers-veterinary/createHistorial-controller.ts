import { Request, Response } from "express";
import VeterinaryService from "../../services/VeterinaryServices";
import createHistorial from "../../Dto/Dto-Veterinary/createHistorialDto";

let createHistoryMedical =  async (req: Request, res: Response) =>{
 
    try { 

       const  {   
        // Informacion del usuario 
        nombre,
        telefono,
        direccion,
        email,
        nombreMascota,
        edad,
        estadovacunacion,
        especie,
        raza,
        tipocita,
        // Informacion del veterinario
        nombreveterinario,
        especialidad,
        especialidadmedica,
        telefonovet,
        emailvet,
        //campos de historial 
        motivoconsulta,
        diagnostico,
        tratamiento,
        examen,
        } = req.body
        
        // Extraer el ID de usuario de la solicitud
        const IdVeterinario: any = req.user?.id;
        console.log('IdUsuario extraído:', IdVeterinario);

        let IdUsuario = " ";

        if (typeof IdVeterinario !== 'string') {
            return res.status(400).json({
                status: 'error',
                message: 'User ID not found in token or has invalid type'
              });
        }

        const historialCreado: any = await VeterinaryService.createHistorial(new createHistorial(
            IdVeterinario,
            IdUsuario,
            nombre,
            telefono,
            direccion,
            email,
            nombreMascota,
            edad,
            estadovacunacion,
            especie,
            raza,
            tipocita,
            nombreveterinario,
            especialidad,
            especialidadmedica,
            telefonovet,
            emailvet,
            motivoconsulta,
            tratamiento,
            diagnostico,
            examen
        ));
        console.log('datos del historial veterinario',historialCreado);
        if (! historialCreado.insert) {
            return res.status(404).json({
                status: 'error',
                message: historialCreado.status,
                error: historialCreado.errorSql

            });
        }

        // devolver respuesta exitosa 
        return res.status(200).json({
            status: 'success',
            consultation: historialCreado.insert,
            message: historialCreado.status
        });
        
        
    } catch (error: any) {
        console.error('error al enviar la informacion del historial a la base de datos', error);

        //devolver respuesta de error
        return res.status(500).json({
            status: 'error',
            message: 'failed inserting data',
            error: error.message
        });
        
    }
}

export default createHistoryMedical;
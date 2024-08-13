import { Request, Response } from "express";
import Schedule from "../../Dto/Dto-User/scheduleAppointmentDto";
import UserService from '../../services/userServices';

let schedule = async (req: Request, res: Response) => {
    try {
        console.log('Datos recibidos en el backend:', req.body);

        const IdUsuario:  any = req.user?.id;
        console.log(' id del usuario para agregar cita: ',IdUsuario);
        

        const {
            nombre, 
            telefono, 
            correo,
            direccion,
            sintomas,  // recibido como sintomas
            nombreMascota,
            edad, 
            especie,
            estadovacunacion,  // recibido como estadovacunacion
            raza,
            sexo,
            tipoDeCita,  // recibido como tipoDeCita
            fecha, 
            hora
        } = req.body;

        console.log('Datos para crear el Schedule:', {
            nombre, 
            telefono, 
            correo,
            direccion,
            motivoConsulta: sintomas,  
            nombreMascota,
            edad, 
            especie,
            estadoVacunacion: estadovacunacion,  
            raza,
            sexo,
            tipoCita: tipoDeCita,  
            fecha, 
            hora
        });

        const newScheduleAppointment = await UserService.scheduleAppointment(new Schedule(
            IdUsuario,
            nombre, 
            telefono, 
            correo,
            direccion,
            nombreMascota,
            edad, 
            especie,
            estadovacunacion, 
            raza,
            sintomas,
            sexo,
            tipoDeCita,
            fecha, 
            hora
        ));
        
        console.log('Resultado de la programación de la cita:', newScheduleAppointment);

        return res.status(201).json({ status: 'schedule appointment created', schedule: newScheduleAppointment });

    } catch (error: any) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
}

export default schedule;

import { Request, Response } from "express";
import Schedule from "../../Dto/Dto-User/scheduleAppointmentDto";
import UserService from '../../services/userServices';
import { emailAddDateService } from "../../services/emailAddDateService";

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
        let precio: number;

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
        switch (tipoDeCita) {
            case 'Consulta general':
                precio = 20.000
                break;
            case 'Vacunación':
                precio = 15.000
                break;
            case 'Consulta de Cirugía':
                precio = 30.000
                break;
            case 'Consulta de Odontología':
                precio = 25.000
                break;
            case 'Consulta de Nutrición':
                precio = 15.000
                break;
            case 'Chequeo Pre-Adopción':
                precio = 20.000
                break;
            default:
                precio = 0
                break;
        }
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
            precio,
            fecha, 
            hora
        ));
        
        console.log('Resultado de la programación de la cita:', newScheduleAppointment);

        if (newScheduleAppointment) {
            res.status(201).json({ status: 'schedule appointment created', schedule: newScheduleAppointment });
            emailAddDateService(correo,nombre,fecha,hora,tipoDeCita, nombreMascota)
               .then(() => console.log("Correo de cita enviado"))
               .catch(emailError => console.error("Error al enviar el correo de cita:", emailError));
        }

        

    } catch (error: any) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
}

export default schedule;

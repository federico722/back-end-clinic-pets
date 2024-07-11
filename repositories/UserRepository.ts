import db from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/authDto';
import Schedule from '../Dto/ScheduleAppointmentDto';
import Veterinary from '../Dto/veterinaryDto';
import bcrypt from 'bcryptjs';

class UserRepository {
    static async add(user: User){
        const sql = 'INSERT INTO usuario (nombreUsuario, apellidoUsuario, numeroDeDocumento, numeroDeTelefono, correoUsuario, contraseniaUsuario) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [user.nombre, user.apellido, user.numeroDeDocumento, user.numeroDeTelefono, user.email, user.contrasenia];
        return db.execute(sql, values);
    }

    static async addVeterinary(veterinary: Veterinary){
        const sql = 'INSERT INTO veterinario (idVeterinario, idAdministrador ,nombreVeterinario, apellidoVeterinario, correoVeterinario, contrasenaVeterinario) VALUES (?, ?, ?, ?, ?, ?)';
    }

    static async login(auth: Auth){
       const sql = 'SELECT IdUsuario, contraseniaUsuario AS contrasenia FROM usuario WHERE correoUsuario=? UNION SELECT IdAdministrador, contrasenaAdministrador AS contrasenia FROM administrador WHERE correoAdministrador=?'
       const values = [auth.email, auth.email];
       const result: any = await db.execute(sql, values);
       if(result[0].length > 0){
        const esContraseniaValida = await bcrypt.compare(auth.contrasenia, result[0][0].contrasenia);
        if (esContraseniaValida) {
            return {logged: true, status: "Successful authentication", id: result[0][0].id };
        };
        return {logged: false, status: "Invalid username or password" };

       }
       return {logged: false, status: "Invalid username or password" };
    }

    static async scheduleAppointment(schedule: Schedule) {
        console.log('Datos para la base de datos:', schedule);
    
        const sql = 'INSERT INTO cita (fecha, hora, nombreUsuario, numeroTelefonoUsuario, correoUsuario, direccion, nombreMascota, edadMascota, estadoVacunacion, especie, raza, sexo, tipoCita, motivoConsulta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
            schedule.fecha,
            schedule.hora,
            schedule.nombre,
            schedule.telefono,
            schedule.correo,
            schedule.direccion,
            schedule.nombreMascota,
            schedule.edad,
            schedule.estadoVacunacion,
            schedule.especie,
            schedule.raza,
            schedule.sexo,
            schedule.tipoCita,
            schedule.motivoConsulta
        ];
    
        console.log('Valores para la consulta:', values);
    
        try {
            const connection = await db.getConnection();
            const [result] = await connection.execute(sql, values);
            connection.release();
            console.log("Appointment successfully scheduled:", result);
            return { success: true, message: "Appointment successfully scheduled" };
        } catch (error) {
            console.error("Error scheduling appointment:", error);
            return { success: false, message: "Error scheduling appointment", error };
        }
    }
    
}

export default UserRepository;
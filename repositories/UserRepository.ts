import db from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/authDto';
import Schedule from '../Dto/ScheduleAppointmentDto';
import Veterinary from '../Dto/veterinaryDto';
import Profile from '../Dto/EditProfileDto';
import CallDataUser from '../Dto/callDataUserDto';
import bcrypt from 'bcryptjs';
import {RowDataPacket} from "mysql2"

class UserRepository {

    static async addAdmin(user: User){
        const sql = 'INSERT INTO administrador (IdAdministrador, nombreAdministrador, apellidoAdministrador, telefonoAdministrador, correoAdministrador, contrasenaAdministrador) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [user.numeroDeDocumento, user.nombre, user.apellido, , user.numeroDeTelefono, user.email, user.contrasenia];
        const [result] = await db.execute(sql, values);
        return result 
    }
    static async add(user: User){
        const sql = 'INSERT INTO usuario (IdUsuario, nombreUsuario, apellidoUsuario, telefonoUsuario, correoUsuario, contrasenaUsuario) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [user.numeroDeDocumento, user.nombre, user.apellido, , user.numeroDeTelefono, user.email, user.contrasenia];
        const [result] = await db.execute(sql, values);
        return result 
    }

    static async addVeterinary(veterinary: Veterinary){
        const sql = 'INSERT INTO veterinario (idVeterinario, idAdministrador ,nombreVeterinario, apellidoVeterinario, correoVeterinario, contrasenaVeterinario) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [veterinary.idVeterinario, veterinary.idAdministrador, veterinary.nombre, veterinary.apellido, veterinary.email, veterinary.contrasenia];
        return db.execute(sql, values);
        
    }

    static async login(auth: Auth){
       const sql = 'SELECT IdUsuario AS Id, contrasenaUsuario AS contrasenia FROM usuario WHERE correoUsuario=? UNION SELECT IdAdministrador AS Id, contrasenaAdministrador AS contrasenia FROM administrador WHERE correoAdministrador=?'
       const values = [auth.email, auth.email];
       const result: any = await db.execute(sql, values);
       if(result[0].length > 0){
        console.log("ID encontrado:", result[0][0].Id);
        
        console.log('Valores para la consulta:', values);
       
        

        const esContraseniaValida = await bcrypt.compare(auth.contrasenia, result[0][0].contrasenia);
        if (esContraseniaValida) {
            console.log("ID encontrado:", result[0][0].Id);
            console.log('logrado');
            
            return {logged: true, status: "Successful authentication", id: result[0][0].Id };
        };
        return {logged: false, status: "Invalid username or password" };

       }
       return {logged: false, status: "Invalid username or password" };
    }

    static async updateProfile(profile: Profile){
        const sql = 'UPDATE usuario SET nombreUsuario = ?, apellidoUsuario = ?, telefonoUsuario = ?, correoUsuario = ? WHERE IdUsuario = ?';
        const values = [profile.nombre, profile.apellido, profile.numeroDeTelefono, profile.email, profile.IdUsuario];
        try {
            const [result]: any = await db.execute(sql, values);

            console.log(`valores para la consulta: ${values}`);
            console.log("Resultado de la actualización:", result);

            if (result. affectedRows > 0) {
                return { Update: true, status: "Successful Update", Result: result };
            }else{
                return { Update: false, status: "No rows updated. Invalid Id or no changes made." };
            }
        } catch (error: any) {
            console.error("Error al actualizar el perfil:", error);
            return { Update: false, status: "Database error", error: error.message };
        }
       
    }

    static async callDataUser(callDataUser: CallDataUser){
        const sql = 'SELECT nombreUsuario, apellidoUsuario, telefonoUsuario, correoUsuario FROM usuario WHERE IdUsuario = ?';
        const values = [callDataUser.IdUsuario];
        const [result] = await db.execute(sql, values);

        return result ;

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
import db from '../config/config-db';
import User from '../Dto/userDto';
import Auth from '../Dto/authDto';
import Schedule from '../Dto/scheduleAppointmentDto';
import Veterinary from '../Dto/veterinaryDto';
import Profile from '../Dto/editProfileDto';
import CallDataUser from '../Dto/callDataUserDto';
import CallDateUser from '../Dto/callDateUserDto';
import DeleteDataUser from '../Dto/deleteDataUserDto';
import CallDateAppointment from '../Dto/callDateAppointmentDto';
import UpdateAppointment from '../Dto/UpdateAppointmentDto';
import CancelAppointment from '../Dto/cancelAppointmentDto';
import VerifyRol from '../Dto/verifyRol';
import RecoverPassword from '../Dto/recoverPassword';
import bcrypt from 'bcryptjs';

/**
 * Clase que maneja las operaciones de base de datos relacionadas con usuarios y citas.
 */
class UserRepository {

    static async addAdmin(user: User){
        const sql = 'INSERT INTO administrador (IdAdministrador, nombreAdministrador, apellidoAdministrador, telefonoAdministrador, correoAdministrador, contrasenaAdministrador) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [user.numeroDeDocumento, user.nombre, user.apellido, , user.numeroDeTelefono, user.email, user.contrasenia];
        const [result] = await db.execute(sql, values);
        return result 
    }

    /**
     * Agrega un nuevo usuario a la base de datos.
     * @param user Objeto con los datos del usuario a agregar.
     * @returns  Resultado de la operación de inserción.
     */



    static async add(user: User){
        const sql = 'INSERT INTO usuario (IdUsuario, nombreUsuario, apellidoUsuario, telefonoUsuario, correoUsuario, contrasenaUsuario) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [user.numeroDeDocumento, user.nombre, user.apellido, , user.numeroDeTelefono, user.email, user.contrasenia];
        const [result] = await db.execute(sql, values);
        return result 
    }

    static async recover(recoverPassword: RecoverPassword) {
        const sql = 'UPDATE usuario SET contrasenaUsuario = ? WHERE correoUsuario = ?'
    }

    /**
     * 
     * Agrega un nuevo veterinario a la base de datos.
     * 
     * @param veterinary  Objeto con los datos del veterinario a agregar.
     * @returns  Resultado de la operación de inserción.
     */

    static async addVeterinary(veterinary: Veterinary){
        const sql = 'INSERT INTO veterinario (idVeterinario, idAdministrador ,nombreVeterinario, apellidoVeterinario, correoVeterinario, contrasenaVeterinario) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [veterinary.idVeterinario, veterinary.idAdministrador, veterinary.nombre, veterinary.apellido, veterinary.email, veterinary.contrasenia];
        return db.execute(sql, values);
        
    }


    /**
     * 
     * Realiza el proceso de login para un usuario o administrador.
     * 
     * @param auth  Objeto con las credenciales de autenticación.
     * @returns Resultado del intento de login.
     */

    static async login(auth: Auth){
       const sql = 'SELECT IdUsuario AS Id, contrasenaUsuario AS contrasenia, rol  FROM usuario WHERE correoUsuario=? UNION SELECT IdAdministrador AS Id, contrasenaAdministrador AS contrasenia, rol FROM administrador WHERE correoAdministrador=? UNION SELECT IdVeterinario AS Id, contrasenaVeterinario AS contrasenia, rol FROM veterinario WHERE correoVeterinario=?'
       const values = [auth.email, auth.email, auth.email];
       const result: any = await db.execute(sql, values);
       if(result[0].length > 0){
        console.log("ID encontrado:", result[0][0].Id);
        
        console.log('Valores para la consulta:', values);
       
        

        const esContraseniaValida = await bcrypt.compare(auth.contrasenia, result[0][0].contrasenia);
        if (esContraseniaValida) {
            console.log("ID encontrado:", result[0][0].Id);
            console.log('logrado');
            
            return {logged: true, status: "Successful authentication", id: result[0][0].Id, rol: result[0][0].rol };
        };
        return {logged: false, status: "Invalid username or password" };

       }
       return {logged: false, status: "Invalid username or password" };
    }


    /**
     * Actualiza el perfil de un usuario.
     * @param profile Objeto con los datos actualizados del perfil.
     * @returns  Resultado de la actualización.
     */

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

    /**
     * 
     * Obtiene los datos de un usuario específico.
     * 
     * @param callDataUser Objeto con el ID del usuario a consultar.
     * @returns Datos del usuario.
     */

    static async callDataUser(callDataUser: CallDataUser){
        const sql = 'SELECT nombreUsuario, apellidoUsuario, telefonoUsuario, correoUsuario FROM usuario WHERE IdUsuario = ?';
        const values = [callDataUser.IdUsuario];
        const [result] = await db.execute(sql, values);

        return result;

    }

    static async callDateUser(callDateUser: CallDateUser){
        const sql = 'SELECT IdCita, fecha, hora, nombreUsuario, tipoCita, estado FROM cita WHERE IdUsuario = ?';
        const values = [callDateUser.IdUsuario];
        const [result] = await db.execute(sql, values);

        return result;
    }


    static async deleteDataUser(deleteDataUser:DeleteDataUser){
       // const sql = 'UPDATE cita SET deleted = 1 WHERE IdCita = ?';}
       const sql = 'DELETE FROM cita WHERE IdCita = ? '
        const values = [deleteDataUser.IdCita];
        const [result] = await db.execute(sql, values);

        return result;
    }

    static async verifyRol(verifyRol: VerifyRol){
        console.log('repository funciona');
        

       const sql = 'SELECT rol  FROM usuario WHERE IdUsuario = ? UNION SELECT rol FROM administrador WHERE IdAdministrador= ? UNION  SELECT rol FROM veterinario WHERE Idveterinario = ?'
       const values = [verifyRol.IdUsuario, verifyRol.IdUsuario, verifyRol.IdUsuario];
       const [result]: any = await db.execute(sql, values);

       console.log("valor de result: ", result);
       console.log("valor de rol:", result[0].rol);
    

       if (result.length > 0) {

        return { VerifyRol: true, status: "Confirmed user role", rol: result[0].rol};
        
       }else{
        return { VerifyRol: false, status: "User role not found"};
       }
    }


    /**
     * 
     * Programa una nueva cita.
     * 
     * @param schedule Objeto con los detalles de la cita a programar.
     * @returns Resultado de la programación de la cita.
     */


    static async scheduleAppointment(schedule: Schedule) {
        console.log('Datos para la base de datos:', schedule);
    
        const sql = 'INSERT INTO cita (IdUsuario, fecha, hora, nombreUsuario, numeroTelefonoUsuario, correoUsuario, direccion, nombreMascota, edadMascota, estadoVacunacion, especie, raza, sexo, tipoCita, motivoConsulta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
            schedule.IdUsuario,
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

    static async getAppointmentsByDate(date: CallDateAppointment) {
        console.log('data');
        
        const sql = 'SELECT hora FROM cita WHERE fecha = ?';
        const values = [date.fecha];
    
        try {
            const connection = await db.getConnection();
            const [results] = await connection.execute(sql, values);
            connection.release();
            console.log('SQL Results:', results); // Agrega esta línea para depuración

            return results;
        } catch (error) {
            console.error("Error fetching appointments:", error);
            throw error;
        }
    }

    static async updateAppointment(update: UpdateAppointment) {
        const sql = 'UPDATE cita SET fecha = ?, hora = ? WHERE IdCita = ?';
        const values = [update.fecha, update.hora, update.idCita];
        console.log('base', values);
        
        try {
            const connection = await db.getConnection();
            await connection.execute(sql, values);
            connection.release();
        } catch (error) {
            console.error('Error updating appointment:', error);
            throw error;
        }
    }

    static async cancelAppointment(update: CancelAppointment) {
        const sql = 'UPDATE cita SET estado = ? WHERE IdCita = ?';
        const values = [update.estado, update.idCita];
        try {
            const connection = await db.getConnection();
            await connection.execute(sql, values);
            connection.release();
        } catch (error) {
            console.error('Error updating appointment status:', error);
            throw error;
        }
    }
}

export default UserRepository;
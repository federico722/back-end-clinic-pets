import db from "../config/config-db";
import bcrypt from 'bcryptjs';
import GetAppointment from "../Dto/Dto-Veterinary/GetAppointmentVeterinary";
import CreateHistorial from "../Dto/Dto-Veterinary/createHistorialDto";
import veterinary from "../Dto/Dto-Veterinary/registerVeterinaryDto";
import { consultIdAdmin } from "./VetFunction/consultAdmin-function";

import { consultarUsuario } from "./UserFunction/createHistorial-function";

class VeterinaryRepository {

    static async addVeterinary(veterinary: veterinary) {
    // Consulta para obtener el IdAdministrador
    const sqlConsultaIdAdmin = 'SELECT IdAdministrador FROM administrador';
    
    try {
        const [adminResult]: any = await db.execute(sqlConsultaIdAdmin);
        
        // Verifica si se obtuvo correctamente el ID
        let IdAdministrador;

        if (adminResult.length > 0) {
            IdAdministrador = adminResult[0].IdAdministrador; // Extrae el primer ID
        } else {
            console.log('No se encontró el ID del administrador');
            return { error: 'No se encontró el ID del administrador', status: 'error' };
        }

        // Ahora puedes usar el IdAdministrador en la inserción
        const sqlInsertVeterinary = 'INSERT INTO veterinario (IdVeterinario, IdAdministrador, nombreVeterinario, apellidoVeterinario, telefonoVeterinario, correoVeterinario, contrasenaVeterinario) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [
            veterinary.idVeterinario,
            IdAdministrador,  // Usa el IdAdministrador obtenido
            veterinary.nombre,
            veterinary.apellido,
            veterinary.telefono,
            veterinary.email,
            veterinary.contrasenia
        ];

        const [insertResult]: any = await db.execute(sqlInsertVeterinary, values);
        
        if (insertResult && insertResult.affectedRows > 0) {
            return { status: 'Data insertion successful', insertVeterinary: true };
        } else {
            return { insertVeterinary: false, status: 'Could not insert data', errorSql: insertResult };
        }
    } catch (error: any) {
        return { insertVeterinary: false, status: 'error inserting data', error: error.message };
    }
}

    

    static async getAppointment(fecha: GetAppointment) {
        const sql = 'SELECT * FROM cita WHERE fecha = ?';
        const result: any = await db.execute(sql);

        /*const formattedResult = result.map((row: any) => {
            return {
                fecha: new Date(row.fecha).toISOString().split('T')[0],
                hora: row.hora,
                nombreUsuario: row.nombreUsuario
            };
        });*/

        return result //formattedResult;
    }


    static async createHistorial(createHistorial: CreateHistorial){

        //let IdUsuario = '1036888888'
        //let IdUsuario: string | null = null;
        const correoUsuario: string = createHistorial.email;

        console.log('correo usuario', correoUsuario);
        
        const consultaDelIdUsuario = await consultarUsuario(correoUsuario);
        console.log('consulta del id vet:',consultaDelIdUsuario);
        
        /*const consultaDelIdUsuario = await consultarUsuario(correoUsuario);

        if (consultaDelIdUsuario.consultUser) {

            IdUsuario = consultaDelIdUsuario.IdUsuario;
            
        } else {
            return { error: consultaDelIdUsuario.error, status: consultaDelIdUsuario.status  }
        }*/

        const sql = 'INSERT INTO historialCita (IdVeterinario, IdUsuario, nombre, telefono, direccion, email, nombreMascota, edadMascota, estadoDeVacunacion, especie, raza, tipoDeCita, nombreVeterinario, tituloEspecialidad, especialidadMedicina, telefonoVeterinario, emailVeterinario, motivoConsulta, tratamiento, diagnostico, examenMedico, idCita) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const sql2 = "UPDATE cita SET estado = ? WHERE IdCita = ?";
        const values = [
            createHistorial.IdVeterinario, 
            createHistorial.IdUsuario,
            createHistorial.nombre, 
            createHistorial.telefono, 
            createHistorial.direccion, 
            createHistorial.email, 
            createHistorial.nombreMascota, 
            createHistorial.edadMascota, 
            createHistorial.estadoDeVacunacion, 
            createHistorial.especie, 
            createHistorial.raza, 
            createHistorial.tipoDeCita, 
            createHistorial.nombreVeterinario, 
            createHistorial.tituloEspecialidad, 
            createHistorial.especialidadMedicina, 
            createHistorial.telefonoVeterinario, 
            createHistorial.emailVeterinario, 
            createHistorial.motivoConsulta, 
            createHistorial.tratamiento, 
            createHistorial.diagnostico, 
            createHistorial.examenMedico,
            createHistorial.idCita
        ]; 
        console.log('valorres en la data:', values);
        
        const values2 = ['Completada', createHistorial.idCita];
       

        try {
            const [result]: any = await db.execute(sql,values);
            const [result2]: any = await db.execute(sql2, values2);
            console.log('imprimo valores para la consulta:', values);
            
            console.log('imprimir INSERCION de datos:', result);

            if (result && result.affectedRows > 0) {

                return { status: 'Data insertion successful', insert: true }
                
            }else{
                return { insert: false, status: 'Could not insert data', errorSql: result }
            }
        } catch (error: any) {
            console.error("Error al insertar datos en la tabla:", error);
            return { insert: false, status: 'error inserting data', error: error.message}
            
        };
    }
}

export default VeterinaryRepository;


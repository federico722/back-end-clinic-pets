import db from "../config/config-db";
import bcrypt from 'bcryptjs';
import GetAppointment from "../Dto/Dto-Veterinary/GetAppointmentVeterinary";
import CreateHistorial from "../Dto/Dto-Veterinary/createHistorialDto";

import { consultarUsuario } from "./UserFunction/createHistorial-function";

class VeterinaryRepository {

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

        let IdUsuario: string | null = null;

        const consultaDelIdUsuario = await consultarUsuario( createHistorial)

        if (consultaDelIdUsuario.consultUser) {

            IdUsuario = consultaDelIdUsuario.IdUsuario;
            
        } else {
            return { error: consultaDelIdUsuario.error, status: consultaDelIdUsuario.status  }
        }

        const sql = 'INSERT INTO historialCita (IdVeterinario, IdUsuario, nombre, telefono, direccion, email, nombreMascota, edadMascota, estadoDeVacunacion, especie, raza, tipoDeCita, nombreVeterinario, tituloEspecialidad, especialMedicina, telefonoVeterinario, emailVeterinario, motivoConsulta, tratamiento, diagnostico, examenMedico) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
            createHistorial.IdVeterinario, 
            IdUsuario,
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
            createHistorial.examenMedico
        ]; 
       

        try {
            const [result]: any = await db.execute(sql,values);

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


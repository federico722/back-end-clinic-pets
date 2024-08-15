import db from "../config/config-db";
import bcrypt from 'bcryptjs';
import GetAppointment from "../Dto/Dto-Veterinary/GetAppointmentVeterinary";

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
}

export default VeterinaryRepository;


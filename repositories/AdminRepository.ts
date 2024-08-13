import db from "../config/config-db";
import bcrypt from 'bcryptjs';

class AdminRepository {

    static async getAppointment() {
        const sql = 'SELECT fecha, hora, nombreUsuario FROM cita WHERE estado = "Agendada"';
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

export default AdminRepository;


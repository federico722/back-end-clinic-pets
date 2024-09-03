import db from "../config/config-db";
import UploadProducts from "../Dto/Dto-Admin/uploadProductsDto";
import VeterinaryStatus from "../Dto/Dto-Admin/veterinaryStatusDto";
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

    static async addProducts(uploadProducts: UploadProducts) {
        const sql = 'INSERT INTO producto (nombreProducto, descripcion, precio, stock, categoria) VALUES (?, ?, ?, ?, ?)';
        const values = [
            uploadProducts.nombre, 
            uploadProducts.descripcion, 
            uploadProducts.precio, 
            uploadProducts.stock, 
            uploadProducts.categoria 
        ];
    
        try {
            const [result]: any = await db.execute(sql, values);
    
            console.log('Valores para la consulta:', values);
            console.log('Resultado de la inserción:', result);
    
            if (result && result.affectedRows > 0) {
                return { status: 'Successful product insertion', insert: true };
            } else {
                return { insert: false, status: 'Error in product insertion', errorSql: result };
            }
        } catch (error: any) {
            console.error('Error al insertar el producto en la tabla:', error);
            return { insert: false, status: 'Error inserting data', error: error.message };
        }
    }

    static async veterinaryManagement() {
        const sql = 'SELECT IdVeterinario, nombreVeterinario, estadoVet FROM veterinario';
        const [result]: any = await db.execute(sql);
        return result;
    }

    static async veterinaryStatus(vetStatus: VeterinaryStatus) {
        // Obtener el estado actual del veterinario
        const estadoQuery = 'SELECT estadoVet FROM veterinario WHERE IdVeterinario = ?';
        const [currentStatusResult]: any = await db.execute(estadoQuery, [vetStatus.IdVeterinario]);
        const currentStatus = currentStatusResult[0].estadoVet;

        // Determinar el nuevo estado
        const newStatus = currentStatus === 'Activo' ? 'Inactivo' : 'Activo';

        // Actualizar el estado del veterinario
        const sql = 'UPDATE veterinario SET estadoVet = ? WHERE IdVeterinario = ?';
        const values = [newStatus, vetStatus.IdVeterinario];
        await db.execute(sql, values);
    }
}

export default AdminRepository;


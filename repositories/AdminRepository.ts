import db from "../config/config-db";
import UploadProducts from "../Dto/Dto-Admin/uploadProductsDto";
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
}

export default AdminRepository;


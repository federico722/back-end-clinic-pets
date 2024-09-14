import db from "../config/config-db";
import UploadProducts from "../Dto/Dto-Admin/uploadProductsDto";
import DeleteProduct from "../Dto/Dto-Admin/deleteProductDto";
import UploadProductId from "../Dto/Dto-Admin/uploadProductIdDto";
import VeterinaryStatus from "../Dto/Dto-Admin/veterinaryStatusDto";
import AskProductInfo from "../Dto/Dto-Admin/askProductInfoDto";
import updateProduct from "../Dto/Dto-Admin/updateTiendaDto";
import bcrypt from 'bcryptjs';
import { Connection, RowDataPacket } from 'mysql2/promise';


class AdminRepository {

    static async uploadProductId(uploadProductId: UploadProductId){
        const sql = 'SELECT IdProducto, imagen, nombreProducto, precio, stock, categoria, seleccionTallaPresentacion, descripcion, informacion FROM producto WHERE IdProducto = ?';
        const values = [uploadProductId.IdProducto];
        try {
            const [result]: any = await db.execute(sql,values);
             
            if (result.length > 0) {
                return {
                    status: 'product obtained successfully',
                    result: result,
                    obtainedProduct: true
                }
            }else{
                return {
                    status: 'product obtained failed',
                    obtainedProduct: false
                }
            }
        } catch (error: any) {
            console.error('error obtenido', error);
            
            return {
                status: 'error al obtener el producto',
                obtainedProduct: false,
                error: error.message
            }
        }
    }

    static async deleteProduct(deleteProduct: DeleteProduct) {
        const sql = 'DELETE FROM producto WHERE IdProducto = ? ';
        const values = [deleteProduct.IdProducto]

        try {
            const [result]: any = await db.execute(sql,values);

            if (result.affectedRows > 0) {
                return {
                    status: 'succesful delete product',
                    deleteProduct: true,
                }
            }else{
                return {
                    status: 'failed delete product',
                    deleteProduct: false
                }
            }
            
        } catch (error: any) {
            console.error('Error en la eliminacion del producto', error);
            return {
                status: 'error',
                message: 'no se pudo eliminar el producto',
                error: error.message
            }
            
        }
    }



    static async getAppointment() {
        const sql = 'SELECT fecha, hora, nombreUsuario, IdCita FROM cita WHERE estado = "Agendada"';
        const result: any = await db.execute(sql);
    
        //const sql = 'SELECT fecha, hora, nombreUsuario, IdUsuario numeroTelefonoUsuario, correoUsuario, direccion, nombreMascota, edadMascota, especie, raza, tipoCita, moivoConsulta FROM cita WHERE estado = "Agendada"';

        /*const formattedResult = result.map((row: any) => {
            let formattedDate = '';
            try {
                const date = new Date(row.fecha);
                if (!isNaN(date.getTime())) { // Verifica si la fecha es válida
                    formattedDate = date.toISOString().split('T')[0];
                } else {
                    throw new Error('Invalid date');
                }
            } catch (error) {
                console.error('Error formatting date:', error);
                formattedDate = 'Invalid date'; // Puedes manejar esto según tus necesidades
            }
            
            return {
                fecha: formattedDate,
                hora: row.hora,
                nombreUsuario: row.nombreUsuario
            };
        });*/
    
        return result;
    }
    
    

    static async askAllForProducts(){
        const sql = 'SELECT IdProducto, imagen, nombreProducto, precio, stock, categoria, seleccionTallaPresentacion, descripcion, informacion FROM producto';
        try {
            const [result]: any = await db.execute(sql);
            if (result.length > 0) {
                return {
                    status: 'Consulta de productos exitosa',
                    result,
                    consultProducts: true
                }
            }else{
                return {
                    status: 'No se encontraron productos',
                    consultProducts: false
                }
            }
            
        } catch (error: any) {
            console.error('Error durante la consulta de productos:', error);
            return {
                status: 'Error en la consulta de productos',
                consultProducts: false,
                error: error.message
            }
        }


    }

    static async updateProduct(updateProduct: updateProduct){
      const sql = "UPDATE producto SET nombreProducto = ?, precio = ?, stock = ?, categoria = ?, descripcion = ?, informacion = ?, seleccionTallaPresentacion = ? WHERE IdProducto = ?";
      const values = [updateProduct.nombre, updateProduct.precio, updateProduct.stock, updateProduct.categoria, updateProduct.descripcion, updateProduct.informacion, updateProduct.seleccionTallaPresentacion, updateProduct.IdProducto]

      try {
        const [result]: any = await db.execute(sql, values);
        if (result.affectedRows > 0) {
            return { status: 'actualizacion completa', update: true }
        }else{
            return { status: 'error al actualizar', update: false }
        }
      } catch (error: any) {
         console.error('error al intentar actualizar', error);
         return {
            status: 'error en la actualizacion',
            update: false,
            error: error.message
         }
      }


    }


    static async addProducts(uploadProducts: UploadProducts) {
        const sql = 'INSERT INTO producto ( imagen, nombreProducto, descripcion, informacion, precio, stock, categoria, seleccionTallaPresentacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
            uploadProducts.imagenProducto,
            uploadProducts.nombre, 
            uploadProducts.descripcion, 
            uploadProducts.informacion,
            uploadProducts.precio, 
            uploadProducts.stock, 
            uploadProducts.categoria,
            uploadProducts.seleccionTallaPresentacion
        ];
        console.log('values', values);
        
    
        try {
            const [result]: any = await db.execute(sql, values);
    
           // console.log('Valores para la consulta:', values);
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
        
        if (currentStatusResult.length === 0) {
            throw new Error('Veterinarian not found');
        }
    
        const currentStatus = currentStatusResult[0]?.estadoVet;
    
        // Determinar el nuevo estado
        const newStatus = currentStatus === 'Activo' ? 'Inactivo' : 'Activo';
    
        // Actualizar el estado del veterinario
        const sql = 'UPDATE veterinario SET estadoVet = ? WHERE IdVeterinario = ?';
        const values = [newStatus, vetStatus.IdVeterinario];
        await db.execute(sql, values);
    }

    static async askProductInfo(askProductInfo: AskProductInfo) {
        const sql = 'SELECT IdProducto, imagen, nombreProducto, descripcion, informacion, precio, stock, categoria, seleccionTallaPresentacion FROM producto WHERE IdProducto = ?';
        const values = [askProductInfo.IdProducto];

        try {
            const [result]: any = await db.execute(sql, values);

            if (result.length > 0) {
                return {
                    status: 'Informacion de producto obtenida',
                    select: true,
                    result: result
                }
            }else{
               return {
                status: 'Fallo al obtener la informacion',
                select: false,
               }
            }
        } catch (error: any) {
            console.error('error al obtener la informacion');
            return {
                status: 'Error',
                select: false,
                error: error.message
            }
            
        }

    }















    static async desactivateDay(date: string) {
        const sql = `INSERT INTO desactivate (date, type) VALUES (?, 'day') ON DUPLICATE KEY UPDATE type = 'day'`;
        console.log('datos para dia', date);
        
        const values = [date];

        try {
            const connection = await db.getConnection();
            await connection.execute(sql, values);
            connection.release();
            return { message: 'Day deactivated successfully' };
        } catch (error) {
            console.error("Error desactivating day:", error);
            throw error;
        }
    }


    static async activateDay(date: string) {
        const sql = 'DELETE FROM desactivate WHERE date = ?'
        const values = [date];
        try {
            const connection = await db.getConnection();
            await connection.execute(sql, values);
            connection.release();
            return { message: 'Day activated successfully' };
        } catch (error) {
            console.error(`'Error activating day`, error);
            throw error;
        }
    }

    // Desactivar una hora
    static async desactivateTime(date: string, time: string) {
        const sql = `INSERT INTO desactivate (date, time, type) VALUES (?, ?, 'time') ON DUPLICATE KEY UPDATE type = 'time'`;
        console.log('datos para horas', date, time);
        
        const values = [date, time];

        try {
            const connection = await db.getConnection();
            await connection.execute(sql, values);
            connection.release();
            return { message: 'Time deactivated successfully' };
        } catch (error) {
            console.error("Error desactivating time:", error);
            throw error;
        }
    }


    static async activateTime(date: string, time: string) {
        const sql = 'DELETE from desactivate WHERE date = ? AND time = ?';
        const values =  [date, time];
        try {
            const connection = await db.getConnection();
            await connection.execute(sql, values);
            return { message: 'Time activated successfully' };
        } catch (error) {
            throw error;
        }
    }

    // Consultar días desactivados
    static async getDisabledDays(): Promise<string[]> {
        const sql = `SELECT DISTINCT date FROM desactivate WHERE type = 'day'`;

        try {
            const connection = await db.getConnection();
            const [results] = await connection.execute(sql);
            connection.release();

            // Asegúrate de que results sea un array de objetos
            if (Array.isArray(results)) {
                return (results as Array<{ date: string }>).map(row => row.date);
            } else {
                throw new Error("Unexpected result format");
            }
        } catch (error) {
            console.error("Error fetching disabled days:", error);
            throw error;
        }
    }

    static async getDisabledTimes(): Promise<string[]> {
        const sql = `SELECT DISTINCT time FROM desactivate WHERE type = 'time'`;
    
        try {
            const connection = await db.getConnection();
            const [results] = await connection.execute(sql);
            connection.release();

            // Asegúrate de que results sea un array de objetos
            if (Array.isArray(results)) {
                return (results as Array<{ time: string }>).map(row => row.time);
            } else {
                throw new Error("Unexpected result format");
            }
        } catch (error) {
            console.error("Error fetching disabled times:", error);
            throw error;
        }
    }
}

export default AdminRepository;


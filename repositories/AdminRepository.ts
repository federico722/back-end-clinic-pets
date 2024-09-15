import db from "../config/config-db";
import UploadProducts from "../Dto/Dto-Admin/uploadProductsDto";
import DeleteProduct from "../Dto/Dto-Admin/deleteProductDto";
import UploadProductId from "../Dto/Dto-Admin/uploadProductIdDto";
import VeterinaryStatus from "../Dto/Dto-Admin/veterinaryStatusDto";
import AskProductInfo from "../Dto/Dto-Admin/askProductInfoDto";
import updateProduct from "../Dto/Dto-Admin/updateTiendaDto";
import bcrypt from 'bcryptjs';
import DeletePet from '../Dto/Dto-Admin/deletePetsDto';
import UpdatePetVerify from "../Dto/Dto-Admin/updatePetVerifyDto";
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
      const sql = "UPDATE producto SET imagen = ?, nombreProducto = ?, precio = ?, stock = ?, categoria = ?, descripcion = ?, informacion = ?, seleccionTallaPresentacion = ? WHERE IdProducto = ?";
      const values = [updateProduct.imagenProducto ,updateProduct.nombre, updateProduct.precio, updateProduct.stock, updateProduct.categoria, updateProduct.descripcion, updateProduct.informacion, updateProduct.seleccionTallaPresentacion, updateProduct.IdProducto]

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
















    static async desactivateDay(date: any) {
        const sql = `INSERT INTO desactivate (date, type) VALUES (?, 'day') ON DUPLICATE KEY UPDATE type = 'day'`;
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

    // Desactivar una Hora
    static async desactivateTime(date: any, time: any) {
        const sql = `INSERT INTO desactivate (date, time, type) VALUES (?, ?, 'time') ON DUPLICATE KEY UPDATE type = 'time'`;
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

    // Consultar Días Desactivados
    static async getDisabledDays() {
        const sql = `SELECT DISTINCT date FROM desactivate WHERE type = 'day'`;

        try {
            const connection = await db.getConnection();
            const [results] = await connection.execute<RowDataPacket[]>(sql);
            connection.release();
            return results.map(row => row.date);
        } catch (error) {
            console.error("Error fetching disabled days:", error);
            throw error;
        }
    }

    // Consultar Horas Desactivadas
    static async getDisabledTimes(): Promise<string[]> {
        const sql = `SELECT DISTINCT time FROM desactivate WHERE type = 'time'`;
    
        try {
            const connection = await db.getConnection();
            const [results] = await connection.execute<RowDataPacket[]>(sql);
            connection.release();
            
            // Verifica que results es un arreglo y usa map para extraer los tiempos
            return results.map(row => row.time);
        } catch (error) {
            console.error("Error fetching disabled times:", error);
            throw error;
        }
    }

    static async deletePet(deletePet: DeletePet){
        const sql = "DELETE FROM adopcionMascota WHERE IdAdopcionMascota = ?";
        const values = [deletePet.IdAdopcionMascota];
 
        try {
             const [result]: any = await db.execute(sql, values);
 
             if (result.affectedRows > 0) {
                 return {
                     status: 'mascota eliminada',
                     message: 'mascota eliminada de adopciones',
                     delete: true
                 }
             }else{
                 return {
                     status: 'error al eliminar la mascota',
                     message: 'no se pudo eliminar la mascota de adopciones',
                     delete: false
                 }
             }
        } catch (error: any) {
               console.error('error en el servidor ');
               return {
                 status: 'error',
                 message: 'error interno en el servidor',
                 delete: false
               }
        }
     }

     static async callPetVerify(){
        const sql = "SELECT IdAdopcionMascota, IdUsuario, imagenMascota, nombreMascota, edadMascota, especieMascota, razaMascota, sexo, esterilizacionMascota, estadoVacunacionMascota, numeroTelefono, ubicacion, historia FROM adopcionMascota WHERE estado = 'En espera'";
        
        try {
            const [result]: any = await db.execute(sql);
            if (result.length > 0) {
                return {
                    status: 'succesfully data',
                    message: 'datos de las mascotas en verificacion obtenidas',
                    select: true,
                    result
                }
            }else {
                return {
                    status: 'failed obtained data',
                    message: 'No se pudo obtener los datos de las mascotas',
                    select: false
                }
            }
        } catch (error: any) {
            console.error('error interno del servidor', error);
            return {
                status: 'error',
                message: 'error interno del servidor',
                select: false,
                error: error.message
            }
            
        }
     }

    static async updatePetVerify(updatePetVerify: UpdatePetVerify){
        const sql = "UPDATE adopcionMascota SET estado = 'En adopcion' WHERE IdAdopcionMascota = ?";
        const values = [updatePetVerify.IdAdopcionMascota]

        try {
            const [result]: any = await db.execute(sql, values);
            if (result.affectedRows > 0) {
                return {
                    status: 'succesfully update data pets',
                    message: 'se actualizo el estado de la mascota',
                    update: true
                }
            }else {
                return {
                    status: 'failed update data pets',
                    message: 'error al actualizar el estado de la mascota',
                    update: false
                }
            }
        } catch (error: any) {
            console.error('error interno en el servidor',error);
            return {
                status: 'error',
                message: 'error interno del servidor',
                update: false
            }
        }
    }

    static async deletePetVerify(updatePetVerify: UpdatePetVerify){
        const sql = "DELETE FROM adopcionMascota WHERE IdAdopcionMascota = ?";
        const values = [updatePetVerify.IdAdopcionMascota];
        try {
            const [result]: any = await db.execute(sql, values);
            if( result.affectedRows){
                return{ 
                    status: 'succesfully delete pets verify',
                    message: 'se ha borrado exitosamente la mascota',
                    delete: true
                }
            }else{
                return {
                    status: 'failed delete pets verify',
                    message: 'no se pudo eliminar la mascota',
                    delete: false
                }
            }
        } catch (error: any) {
            console.error('error interno en el servidor', error);
            return {
                status: 'error',
                message: 'Error interno en el servidor',
                delete: false
            }
        }
    }
    
}

export default AdminRepository;


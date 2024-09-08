import db from "../config/config-db";
import UploadProducts from "../Dto/Dto-Admin/uploadProductsDto";
import DeleteProduct from "../Dto/Dto-Admin/deleteProductDto";
import UploadProductId from "../Dto/Dto-Admin/uploadProductIdDto";
import VeterinaryStatus from "../Dto/Dto-Admin/veterinaryStatusDto";
import bcrypt from 'bcryptjs';

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
    
}

export default AdminRepository;


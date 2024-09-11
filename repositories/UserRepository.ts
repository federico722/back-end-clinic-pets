import db from '../config/config-db';
import User from '../Dto/Dto-User/userDto';
import Auth from '../Dto/authDto';
import Schedule from '../Dto/Dto-User/scheduleAppointmentDto';
import Veterinary from '../Dto/Dto-Admin/veterinaryDto';
import Profile from '../Dto/editProfileDto';
import CallDataUser from '../Dto/Dto-User/callDataUserDto';
import CallDateUser from '../Dto/Dto-User/callDateUserDto';
import DeleteDataUser from '../Dto/Dto-User/deleteDataUserDto';
import CallDateAppointment from '../Dto/Dto-User/callDateAppointmentDto';
import UpdateAppointment from '../Dto/Dto-User/UpdateAppointmentDto';
import CancelAppointment from '../Dto/Dto-User/cancelAppointmentDto';
import VerifyRol from '../Dto/verifyRol';
import RecoverPassword from '../Dto/recoverPasswordDto';
import CallTutorData from '../Dto/callTutorData';
import AddProductCart from '../Dto/Dto-User/addProductCartDto';
import AddPet from '../Dto/Dto-User/addPetDto';
import DeleteProductCart from '../Dto/Dto-User/deleteProductCartDto';
import RemoveAllProduct from '../Dto/Dto-User/removeAllProductDto';
import UpdatePets from '../Dto/Dto-User/updatePetsDto';
import UploadProductUser from '../Dto/Dto-User/uploadProductUserDto';
import UpdateProductCart from '../Dto/Dto-User/updateProductCartDto';
import deleteAllProduct from '../Dto/Dto-User/deleteAllProductDto';
import UploadPetId from '../Dto/Dto-User/uploadPetIdDto';
import bcrypt from 'bcryptjs';

//importacion de funciones de recoverPassword
import {updatePasswordUser, capitalizeFirstLetter, querySql} from '../repositories/UserFunction/recoverPassword-function'
//importaciones de funciones de updateProfile
import { updateAdmin, updateUser, updateVet } from './UserFunction/updateProfile-function';
//importar funcion para quitar am y pm 
import { converTime } from './UserFunction/converTime-functions';
// importar actualizar carrito de compras
import { updateCartUser } from './UserFunction/updateCartUser-functions';
// importar obtener productos del carro del usuario
import { uploadCartProduct } from './UserFunction/callDataCartUser-functions';



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
        const values = [user.numeroDeDocumento, user.nombre, user.apellido, user.numeroDeTelefono, user.email, user.contrasenia];
        const [result] = await db.execute(sql, values);
        return result 
    }


    static async recover(recoverPassword: RecoverPassword) {
        let resultadoTipoRol: string | null = null;
          
        const tiposUsuario = ['usuario', 'administrador', 'veterinario'];
        for (let tipo of tiposUsuario) {
            let resultado: any | null = await querySql(recoverPassword, tipo);
            if (resultado.resultQuery) {
                resultadoTipoRol = resultado.rolUser;
                break;
            }else{
                return resultado;
            }
            
        };

        if (resultadoTipoRol) {
            
            return updatePasswordUser( recoverPassword ,resultadoTipoRol);
        }else {
            return { updatePassword: false, status: "User not found" };
        }

    }

    /**
     * 
     * Agrega un nuevo veterinario a la base de datos.
     * 
     * @param veterinary  Objeto con los datos del veterinario a agregar.
     * @returns  Resultado de la operación de inserción.
     */

    /*static async addVeterinary(veterinary: Veterinary){
        const sql = 'INSERT INTO veterinario (idVeterinario, idAdministrador ,nombreVeterinario, apellidoVeterinario, correoVeterinario, contrasenaVeterinario) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [veterinary.idVeterinario, veterinary.idAdministrador, veterinary.nombre, veterinary.apellido, veterinary.email, veterinary.contrasenia];
        return db.execute(sql, values);
        
    }*/

    /**
     * 
     * Realiza el proceso de login para un usuario o administrador.
     * 
     * @param auth  Objeto con las credenciales de autenticación.
     * @returns Resultado del intento de login.
     */

    static async login(auth: Auth) {
        const sql = `
            SELECT IdUsuario AS Id, contrasenaUsuario AS contrasenia, rol, NULL AS estadoVet
            FROM usuario
            WHERE correoUsuario=?
            UNION
            SELECT IdAdministrador AS Id, contrasenaAdministrador AS contrasenia, rol, NULL AS estadoVet
            FROM administrador
            WHERE correoAdministrador=?
            UNION
            SELECT IdVeterinario AS Id, contrasenaVeterinario AS contrasenia, rol, estadoVet
            FROM veterinario
            WHERE correoVeterinario=?
        `;
        const values = [auth.email, auth.email, auth.email];
        const result: any = await db.execute(sql, values);
    
        if (result[0].length > 0) {
            const user = result[0][0];
            console.log("ID encontrado:", user.Id);
            console.log('Valores para la consulta:', values);
            console.log('existe el rol:', user.rol);
            
    
            // Verifica la contraseña
            const esContraseniaValida = await bcrypt.compare(auth.contrasenia, user.contrasenia);
    
            if (esContraseniaValida) {
                // Verifica el estado solo si el rol es 'veterinario'
                if (user.rol === 'veterinario' && user.estadoVet !== 'activo') {
                    return { logged: false, status: "Account is inactive" };
                }
    
                console.log("ID encontrado:", user.Id);
                console.log('logrado');
    
                return { logged: true, status: "Successful authentication", id: user.Id, rol: user.rol };
            }
    
            return { logged: false, status: "Invalid username or password" };
        }
    
        return { logged: false, status: "Invalid username or password" };
    }
    
    
    /*static async login(auth: Auth){
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
    }*/

    /**
     * Actualiza el perfil de un usuario.
     * @param profile Objeto con los datos actualizados del perfil.
     * @returns  Resultado de la actualización.
     */

    static async updateProfile(profile: Profile){

     async function devolverRol(profile:Profile) {
        const sql = ' SELECT rol FROM usuario WHERE IdUsuario = ? UNION SELECT rol FROM administrador WHERE IdAdministrador = ? UNION SELECT rol FROM veterinario WHERE IdVeterinario = ?';
        const values = [profile.IdUsuario, profile.IdUsuario, profile.IdUsuario];

        const [result]: any = await db.execute(sql, values);

        const rolConsultado: string = result[0]?.rol;

        return rolConsultado;
     }

     const rol: any = await devolverRol(profile);
     let result: any = null;

     switch (rol) {
        case 'usuario':
            result = await updateUser(profile);
            break;
        case 'administrador':
            result = await updateAdmin(profile);
            break;
        case 'veterinario':
            result = await updateVet(profile);
            break;
     
        default:
            result = null;
            break;
     }
       
        try {
           
            console.log("Resultado de la actualización:", result);

            if (result.affectedRows > 0) {
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
        const sql = 'SELECT nombreUsuario, apellidoUsuario, telefonoUsuario, correoUsuario, rol FROM usuario WHERE IdUsuario = ? UNION SELECT nombreAdministrador, apellidoAdministrador, telefonoAdministrador, correoAdministrador, rol FROM administrador WHERE IdAdministrador = ? UNION SELECT nombreVeterinario, apellidoVeterinario, telefonoVeterinario, correoVeterinario, rol FROM veterinario WHERE IdVeterinario = ?';
        const values = [callDataUser.IdUsuario, callDataUser.IdUsuario, callDataUser.IdUsuario];
        const [result] = await db.execute(sql, values);

        return result;

    }

    static async callTutorData(callData: CallTutorData){
        const sql = 'SELECT nombreUsuario, apellidoUsuario, telefonoUsuario, correoUsuario FROM usuario WHERE IdUsuario = ?';
        const values = [callData.IdUsuario];

        try {
            const [result]: any | null = await db.execute(sql, values);

            if (result.length > 0) {

                const nameAndLastName: string = `${result[0].nombreUsuario} ${result[0].apellidoUsuario}`;
                const userPhone: string = `${result[0].telefonoUsuario}`;
                const emailUser: string = `${result[0].correoUsuario}`;

                return {
                    consultation: true ,
                    status: 'Users personal data obtained',
                    Nombre: nameAndLastName,
                    Telefono: userPhone, 
                    Correo: emailUser
                }
                
            }else {
                return {
                    consultation: false, status: `Failed to get user data for IdUsuario: ${callData.IdUsuario}`
                }
            }
        } catch (error: any ) {

            console.error("Error al obtener los datos del usuario", error);

            return { consultation: false, status: "error al obtener los datos del usuario", error: error.message };
            
        }

    }

    static async callDateUser(callDateUser: CallDateUser){
        const sql = 'SELECT IdCita, fecha, hora, nombreUsuario, tipoCita, precio, estado FROM cita WHERE IdUsuario = ?';
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

    static async deleteProductCartUser(deleteProductCart: DeleteProductCart){
      const sql = 'DELETE FROM usuarioProducto WHERE IdProducto = ? AND nombreProducto = ?';
      const values = [deleteProductCart.IdProducto, deleteProductCart.nombreProducto];

      try {
        const [result]: any = await db.execute(sql, values);

        if (result.affectedRows > 0 ) {
            
            return { status: "deleted product to cart user", statusDelete: true,  }
        }else{
            return { status: "failed deleted product to cart user", statusDelete: false }
        };
        
      } catch (error: any) {
         console.error("error al eliminar, el producto del carrito de usuario", error);
        return { status: 'error delete to DB', statusDelete: false, error: error.message }
         
      };
      
    };

    static async removeAllProduct(removeAllProduct: RemoveAllProduct){
        const sql = 'DELETE FROM usuarioProducto WHERE IdUsuario = ?';
        const values = [removeAllProduct.IdUsuario];

        try {
            const [result]: any = await db.execute(sql, values);
            if (result.affectedRows > 0) {
                return { status: "remove all products", statusRemove: true }
            }else {
                return { status: "failed remove all products", statusRemove: false}
            }
        } catch (error: any) {
            console.error('error al remover todos los productos de la tabla ', error);
            return { status: "error remove to table ", statusRemove: false, error: error.message};
        };
    };

   

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

        const horaConvertida = converTime(schedule.hora);
    
        const sql = 'INSERT INTO cita (IdUsuario, fecha, hora, nombreUsuario, numeroTelefonoUsuario, correoUsuario, direccion, nombreMascota, edadMascota, estadoVacunacion, especie, raza, sexo, tipoCita, precio, motivoConsulta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
            schedule.IdUsuario,
            schedule.fecha,
            horaConvertida,
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
            schedule.precio,
            schedule.motivoConsulta
        ];
        console.log(schedule.hora);

        
    
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
        const horaConvertida = converTime(update.hora);
        const values = [update.fecha, horaConvertida, update.idCita];
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
        const sql = "UPDATE cita SET estado = ? WHERE IdCita = ?";
        const values = ['Cancelada', update.idCita];
        try {
            const connection = await db.getConnection();
            await connection.execute(sql, values);
            connection.release();
        } catch (error) {
            console.error('Error updating appointment status:', error);
            throw error;
        }
    }

    static async addProductCart(addProductCart: AddProductCart) {
        const sql = 'INSERT INTO usuarioProducto (IdUsuario, IdProducto, imagen, nombreProducto, cantidad, precioUnitario, precioTotal) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [
            addProductCart.IdUsuario, 
            addProductCart.IdProducto, 
            addProductCart.imagenProducto,
            addProductCart.nombre,
            addProductCart.cantidad, 
            addProductCart.precioUnitario, 
            addProductCart.precioTotal
        ];
    
        try {
            const [result]: any = await db.execute(sql, values);
    
            console.log('Valores para la inserción:', values);
            console.log('Resultado de la inserción:', result);
    
            if (result && result.affectedRows > 0) {
                return { status: 'Product added to cart', insertToCart: true };
            } else {
                return { status: 'Failed to add to cart', insertToCart: false, errorSql: result };
            }
        } catch (error: any) {
            console.error('Error al insertar datos en la tabla:', error);
            return { status: 'Error inserting data', insertToCart: false, error: error.message };
        }
    }

    static async addPets(addPets: AddPet ){
        const sql = 'INSERT INTO adopcionMascota (IdUsuario, imagenMascota, nombreMascota, edadMascota, especieMascota, razaMascota, sexo, esterilizacionMascota, estadoVacunacionMascota, numeroTelefono, ubicacion, historia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        const values = [ addPets.IdUsuario, addPets.imagen, addPets.nombre, addPets.edad, addPets.especie, addPets.raza, addPets.sexo, addPets.esterilizacion, addPets.estadoDeVacunacion, addPets.telefono, addPets.ubicacion, addPets.historia];

        console.log('values:', values);
        

        try {
            const [result]: any = await db.execute(sql,values);

            console.log('Valores para la insercion de datos de la mascota:', values);
            console.log('Resultado de la insercion de datos de la mascota:', result);

            if (result && result.affectedRows > 0) {
                return {status: 'Card pet added', insertToPet: true};
            } else{
                return { status: 'Failed added card pet', insertToPet: false};
            }
             
        } catch (error: any) {
            console.error('Error al insertar datos en la tabla de adopcionMascota:', error);
            return { status: 'Error inserting data pet', insertToPet: false, error: error.message };
            
        };
    };

    static async updatePets(updatePets:UpdatePets) {
      const  sql = 'UPDATE adopcionMascota SET nombreMascota = ?, imagenMascota = ?, edadMascota = ?, sexo = ?, razaMascota = ?, estadoVacunacionMascota = ?, esterilizacionMascota = ?, numeroTelefono = ?, ubicacion = ?, historia = ? WHERE IdAdopcionMascota = ?';
      const values = [ 
        updatePets.nombre, 
        updatePets.imagen, 
        updatePets.edad,  
        updatePets.sexo, 
        updatePets.raza, 
        updatePets.estadoVacunacion, 
        updatePets.esterilizacionMascota,
        updatePets.telefono,
        updatePets.ubicacion,
        updatePets.historia
    ]
      try {
        const [result]: any = await db.execute(sql,values);
        console.log('values insertados', values);

        if (result.affectedRows > 0) {
          return { 
            status: 'successful update pets', 
            updatePets: true,
         }
        }else{
            return {
                status: " Failed to update pet data ",
                updatePets: false,
                errorSQl: 'No pet found with the provided ID'
            }
        }
        
      } catch (error: any) {
        console.error('error en la actualizacion de los datos en la DATABASE', error);
        return {
            status: 'Error in database when updating',
            updatePets: false,
            error: error.message 
        }
        
      }
    }

       

    static async askForAllPets(){
        const sql = 'SELECT IdAdopcionMascota, nombreMascota, imagenMascota, edadMascota, sexo, razaMascota, estadoVacunacionMascota, esterilizacionMascota FROM adopcionMascota WHERE estado = en adopcion';

        try {
            const [result]: any = await db.execute(sql);

            if (result.length > 0 ) {
                return {
                    status: 'Calling for information on all pets',
                    callData: true,
                    mascotas: result // Devuelve todos los resultados
                };

            }else{
                return {
                    status: 'Could not call information for all pets',
                    callData: false,
                    errorSql: 'No pets found'
                }
            }
        } catch (error: any) {
            console.error('Error en la base de datos al llamar a las adopciones',error);
            return {
                status: 'Error in the data base',
                callData: false,
                error: error.message
            }; 
        };
    };

    static async uploadProductUser(uploadProductUser: UploadProductUser){
      const  sql = 'SELECT IdUsuarioProducto, IdUsuario, IdProducto, imagen, nombreProducto, cantidad, precioUnitario, precioTotal FROM usuarioProducto WHERE IdUsuario = ?';
      const values = [uploadProductUser.IdUsuario];

      try {
        const [result]: any = await db.execute(sql, values);
        if (result.length > 0) {
            return {
                status: 'consulta de productos del usuario exitosa',
                consult: true,
                result: result
            }
        } else {
            return {
                status: 'consulta fallida no se pudo recuperar los datos',
                consult: false
            }
        }
      } catch (error: any) {
          console.error('error en la base de datos', error);
          return {
            status: 'error en la consulta',
            consult: false,
            error: error.message 
          }
          
      }
    }

    static async updateProductCart(updateCart: UpdateProductCart){
        
        try {
            const updateResult: any = await updateCartUser(updateCart.cantidad, updateCart.IdUsuarioProducto);


            if (updateResult.update ) {
                return {
                    status: 'cantidad actualizada',
                    successfully: true,
                }
            }else{
                return {
                    status: 'fallo al actualizar la cantidad',
                    successfully: false,
                }
            }

        } catch (error: any) {
            console.error('Error en el servidor: ', error);
            return {
                status: 'error',
                successfully: false,
                error: error.message
            }
        }  
    }

    static async callCardsPets(){
        const sql = 'SELECT IdAdopcionMascota, IdUsuario, ImagenMascota, nombreMascota, edadMascota, especieMascota, razaMascota, sexo, esterilizacionMascota, estadoVacunacionMascota, numeroTelefono, ubicacion, historia FROM adopcionMascota WHERE estado = "en adopcion" ';
        
        try {
            const [result]: any = await db.execute(sql);
            if (result.length > 0) {
                return {
                    status: 'informacion de mascotas obtenida',
                    select: true,
                    result: result
                }
            }else{
                return {
                    status: 'no se pudo obtener la informacion de las mascotas',
                    select: false,
                }
            }
        } catch (error: any) {
            console.error('error en el servidor al intentar obtener la info de las mascotas', error);
            return{
                status: 'Error',
                select: false,
                error: error.message
            };
        };
    };

    static async uploadPetId(uploadPetId: UploadPetId){
        const sql = 'SELECT IdAdopcionMascota, IdUsuario, imagenMascota, nombreMascota, edadMascota, especieMascota, razaMascota, sexo, esterilizacionMascota, estadoVacunacionMascota, numeroTelefono, ubicacion, historia, estado FROM adopcionMascota WHERE IdAdopcionMascota = ?';
        const values = [uploadPetId.IdAdopcionMascota];

        try {
            const [result]: any = await db.execute(sql,values);
            if (result.length > 0) {
                return {
                    status: 'exito',
                    message: 'informacion de mascota obtenida',
                    select: true,
                    result
                }
            }else{
                return {
                status: 'fallo',
                message: 'no se pudo obtener la informacion de la mascota',
                select: false
                }
            }
        } catch (error: any) {
            console.error('error interno en el servidor ', error);
            return {
                status: 'error',
                message: 'error interno en el servidor',
                select: false,
                error: error.message
            }
        }
    }

}

export default UserRepository; 
import RecoverPassword from '../../Dto/recoverPasswordDto';
import db from '../../config/config-db';




let rolUser: string | null = null;

export function capitalizeFirstLetter(str: string) {
    if (!str) return str; // Verifica si la cadena está vacía
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export async function  querySql(recoverPassword: RecoverPassword, tipoUsuario:string) {
    const sql = `SELECT rol  FROM ${tipoUsuario} WHERE correoUsuario = ?`;
    const values= [recoverPassword.correoUsuario];

    try {

        const [result]: any = await db.execute(sql,values);

        if (result.length > 0) {
            
            return { resultQuery: true, rolUser: result[0].rol}
        }else {

            return  { resultQuery: false}
        }
        
    } catch (error: any) {
        console.error("Error al hacer consulta:", error);
        return { resultQuery: false, status: "Database error", error: error.message };
    }

}



export async function updatePasswordUser(recoverPassword: RecoverPassword, tipoUsuario:string) {
 
    const typeRol = capitalizeFirstLetter(tipoUsuario);


    const sql = `UPDATE ${tipoUsuario} SET contrasena${typeRol} = ? WHERE correoUsuario = ? AND rol = ?` ;
    const values = [recoverPassword.contrasenaUsuario, recoverPassword.correoUsuario, typeRol];
    
    console.log('contraseña', recoverPassword.contrasenaUsuario);
    
    try {
        const [result]: any = await db.execute(sql, values);  

        console.log( 'resultado de actualizar clave', result);
        
        if (result.affectedRows > 0) {
            return { updatePassword: true, status: "Successful update password", newPassword: recoverPassword.contrasenaUsuario}; 
        } else {
            return { updatePassword: false, status: " Password update failed ", result: result}
        }
        
    } catch (error: any) {
        console.error("Error al actualizar la contraseña:", error);
        return { Update: false, status: "Database error", error: error.message };
        
    }
}



     

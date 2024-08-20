import db from "../../config/config-db";
import CreateHistorial from "../../Dto/Dto-Veterinary/createHistorialDto";

export async function consultarUsuario(createHistorial:CreateHistorial) {

    const sql = 'SELECT IdUsuario FROM usuario WHERE correoUsuario = ? ';
    const values = [createHistorial.email];

    try {
        const [result]: any = await db.execute(sql, values);

        console.log('resultado de la consulta:', result[0].IdUsuario );

        if ( result.length > 0 && result[0].IdUsuario) {

            //console.log('Resultado de la consulta:', result[0].IdUsuario);
            return { consultUser: true, IdUsuario: result[0].IdUsuario }
            
        } else {
            return { consultUser: false, status: 'User not found', error: result };
        }
        
    } catch (error: any) {
        console.error('Error en la consulta del IdUsuario:', error);
        return { consultUser: false, status: 'Error during user lookup', error: error.message };
        
    }
    
}

import db from "../../config/config-db";
import Veterinary from "../../Dto/Dto-Veterinary/registerVeterinaryDto";

export async function consultIdAdmin() {

    const IdAdministrador: string = "miguel@gmail.com";


    const sql = "SELECT IdAdministrador FROM administrador WHERE correoAdministrador = ? ";
    const values = [IdAdministrador];

    try {

        const [result]: any = await db.execute(sql, values);

        console.log('resultado de la consulta', result[0].IdAdministrador);

        if (result.length > 0 && result[0].IdAdministrador) {
            
            return { consultAdmin: true, IdAdministrador: result[0].IdAdministrador };

        } else {
            return { consultAdmin: false, status: "User not found", error: result};
        }  
    } catch (error: any) {
        console.error('Error en la consulta del IdAdministrador: ', error);
        return { consultAdmin: false, status: 'Error during admin search', error: error.message };
    }
}
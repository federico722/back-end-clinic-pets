import db from "../../config/config-db";

export async function updateCartUser(cantidad: number, IdUsuarioProducto: string) {
    const sql = 'UPDATE usuarioProducto SET  cantidad = ? WHERE IdUsuarioProducto = ?';
    const values = [ cantidad, IdUsuarioProducto];
    try {
        const [result]: any = await db.execute(sql, values);

        if (result.affectedRows > 0) {
            return {
                status: 'actualizacion de productos completa',
                update: true,
            }
        }else {
            return {
                status: 'la actualizacion fallo',
                update: false,
            }
        }
    } catch (error: any ) {
        console.error('error en el servidor ', error);
        return {
            error: error.message
        }
        
    }
}


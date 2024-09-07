import db from "../../config/config-db";

export async function  uploadCartProduct(IdUsuarioProducto: string) {
    const sql = 'SELECT IdUsuarioProducto, IdUsuario, IdProducto, imagen, nombreProducto, cantidad, precioUnitario, precioTotal FROM usuarioProducto WHERE IdUsuarioProducto = ?'
    const values = [IdUsuarioProducto]

    try {
        const [result]: any = await db.execute(sql, values);

        if (result.length > 0) {
            return {
                status: 'productos del carro obtenidos',
                select: true,
                result: result
            }
        }else {
            return {
                status: 'fallo al conseguir la informacion del producto',
                select: false,
            }
        }
    } catch (error: any ) {
        console.error('error en el servidor ', error);
        return {
            error: error.message
        }
        
    }
}
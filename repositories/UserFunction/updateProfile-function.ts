import Profile from '../../Dto/editProfileDto';
import db from '../../config/config-db';

async function updateUser(profile:Profile) {
    try {
        const sql = 'UPDATE usuario SET nombreUsuario = ?, apellidoUsuario = ?, telefonoUsuario = ?, correoUsuario = ? WHERE IdUsuario = ?';
        const values = [profile.nombre, profile.apellido, profile.numeroDeTelefono, profile.email, profile.IdUsuario];
        const [result]: any = await db.execute(sql, values);
        return result;
    } catch (error: any) {
        console.error("Error en updateUser:", error);
        throw error;
    }
  }

  async function updateAdmin(profile:Profile) {
    try {
        const sql = 'UPDATE administrador SET nombreAdministrador = ?, apellidoAdministrador = ?, telefonoAdministrador = ?, correoAdministrador = ? WHERE IdAdministrador = ?';
        const values = [profile.nombre, profile.apellido, profile.numeroDeTelefono, profile.email, profile.IdUsuario];
        const [result]: any = await db.execute(sql, values);
        return result;
    } catch (error: any) {
        console.error("Error en updateAdmin:", error);
        throw error;
    }   
    }

  async function updateVet(profile:Profile) {
    try {
        const sql = 'UPDATE veterinario SET nombreVeterinario = ?, apellidoVeterinario = ?, telefonoVeterinario = ?, correoVeterinario = ? WHERE IdVeterinario = ?';
        const values = [profile.nombre, profile.apellido, profile.numeroDeTelefono, profile.email, profile.IdUsuario];
        const [result]: any = await db.execute(sql, values);
        return result;
    } catch (error: any) {
        console.error("Error en updateVet:", error);
        throw error;
    }
  }

export {updateAdmin, updateUser, updateVet};
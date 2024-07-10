import db from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/authDto';
import bcrypt from 'bcryptjs';

class UserRepository {
    static async add(user: User){
        const sql = 'INSERT INTO usuario (nombreUsuario, apellidoUsuario, numeroDeDocumento, numeroDeTelefono, correoUsuario, contraseniaUsuario) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [user.nombre, user.apellido, user.numeroDeDocumento, user.numeroDeTelefono, user.email, user.contrasenia];
        return db.execute(sql, values);
    }
}

export default UserRepository;

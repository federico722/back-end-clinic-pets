import db from '../config/config-db';
import User from '../Dto/UserDto';
import bcrypt from 'bcryptjs';

class UserRepository {
    static async add(user: User){
        const sql = 'INSERT INTO users (nombre, apellido, numeroDeDocumento, numeroDeTelefono, email, contrasenia) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [user.nombre, user.apellido, user.numeroDeDocumento, user.numeroDeTelefono, user.email, user.contrasenia];
        return db.execute(sql, values);
    }
    
}

export default UserRepository;
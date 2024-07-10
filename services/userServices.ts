import db  from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/authDto';
import generateHash from '../Helpers/generateHash';
import UserRepository from '../repositories/UserRepository';

class UserService {
    static async register(user: User){
        user.contrasenia = await generateHash(user.contrasenia);
        return  await UserRepository.add(user);
    }

    static async login(auth: Auth) {
        return await UserRepository.login(auth);
    }
}

export default UserService
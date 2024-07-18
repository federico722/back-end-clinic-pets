import db from '../config/config-db';
import Veterinary from '../Dto/veterinaryDto';
import generateHash from '../Helpers/generateHash';
import veterinaryRepository from '../repositories/veterinaryRepository';



class veterinaryServices {

    static async registerVeterinary(veterinary: Veterinary){
        veterinary.contrasenia = await generateHash(veterinary.contrasenia)
           return await veterinaryRepository.addVeterinary(veterinary);
    }
}

export default veterinaryServices
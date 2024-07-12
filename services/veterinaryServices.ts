import db from '../config/config-db';
import Veterinary from '../Dto/veterinaryDto';
import veterinaryRepository from '../repositories/veterinaryRepository';



class veterinaryServices {

    static async registerVeterinary(veterinary: Veterinary){
           return await veterinaryRepository.addVeterinary(veterinary);
    }
}

export default veterinaryServices
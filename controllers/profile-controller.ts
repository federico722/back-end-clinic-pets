import { Request, Response } from "express";
import UserService from '../services/userServices';
import { validationResult } from "express-validator";
import Profile from "../Dto/EditProfileDto";

let updateProfile = async (req: Request, res: Response) => {
    try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
        const { 
            nombre,
            apellido,
            numeroDeDocumento,
            numeroDeTelefono,
            email,
            numeroDocumentoAntiguo
        } = req.body;
         
        const editProfile = await UserService.updateProfile(new Profile( 
            nombre,
            apellido,
            numeroDeDocumento,
            numeroDeTelefono,
            email,
            numeroDocumentoAntiguo
        ));

        return res.status(200).json({
            status: 'success',
            message: 'Profile updated successfully'
        });
    } catch (error:any) {
        return res.status(500).json({
            status: 'error',
            message: 'Failed to update profile',
            error: error.message
        });
    }
}

export default updateProfile; 
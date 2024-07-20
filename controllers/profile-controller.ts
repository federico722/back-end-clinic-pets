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
           // numeroDeDocumento,
            numeroDeTelefono,
            email,
        } = req.body;

        const IdUsuario: any = req.user?.id

        console.log("datos mandados desde postman",req.body);
        
         
        const editProfile = await UserService.updateProfile(new Profile( 
            nombre,
            apellido,
           // numeroDeDocumento,
            numeroDeTelefono,
            email,
            IdUsuario
        ));

        console.log(editProfile);

        if (editProfile.Update) {
            return res.status(200).json({
                status: 'success',
                message: 'Profile updated successfully'
            });
        }else{
            if (editProfile.status === "Invalid Id or data") {
                return res.status(400).json({
                    status: 'failed',
                    message: 'Invalid user ID or data provided',
                });
            }else{
                return res.status(500).json({
                    status: 'failed',
                    message: 'Failed to update profile',
                    error: editProfile.status
                })

            }
        }
        
        
    } catch (error:any) {
        return res.status(500).json({
            status: 'error',
            message: 'Failed to update profile',
            error: error.message
        });
    }
}

export default updateProfile; 
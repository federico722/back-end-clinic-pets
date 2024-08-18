import { Request, Response } from "express";
import RecoverPassword from "../Dto/recoverPasswordDto";
import UserService from "../services/userServices";

let recoverPasswordUser = async (req: Request, res: Response) => {
    try {

      const   {
        contrasenaUsuario,
        correoUsuario,
        } = req.body 

        console.log('datos para cambiar la contraseña', req.body);

        const recoverPassword = await UserService.recover( new RecoverPassword(contrasenaUsuario, correoUsuario));


        if (!recoverPassword.updatePassword) {
            return res.status(404).json({
                status: 'error',
                message: 'Failed to update password ',
                error: recoverPassword.status || recoverPassword.result
            });
            
        }

            return res.status(200).json({
                status: 'recover password ok',
                updatePassword: true,
                password: recoverPassword.newPassword
            })   
       
    } catch (error: any) {
        console.error('Error en la consulta de los datos del usuario para la cita', error);

        return res.status(500).json({
            status: 'error',
            message: 'Error to update password',
            error: error.message
        })
        
        
    }
}


export default recoverPasswordUser;
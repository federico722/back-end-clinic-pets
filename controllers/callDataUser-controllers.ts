import {Request, Response} from "express"
import UserService from "../services/userServices"
import CallDataUser from "../Dto/callDataUserDto"

let callData = async (req: Request, res: Response) => {
     try {
      console.log('req.user:', req.user);
        const IdUsuario: any = req.user?.id;
        console.log('IdUsuario extraído:', IdUsuario);


        if (typeof IdUsuario !== 'string' ) {
         return res.status(400).json({
           status: 'error',
           messege: 'User ID not found in token or has invalid type'
         });
        }
        
        
        console.log('Intentando obtener datos del usuario con ID:', IdUsuario);

        const callDataUser:any = await UserService.callDataUser(new CallDataUser(IdUsuario));
        console.log('Datos del usuario obtenidos:', callDataUser);


        if (!callDataUser || callDataUser.length === 0) {
         return res.status(404).json({
            status: 'error',
            message: 'User not found'
        });
        }

        return res.status(200).json({
         status: 'success',
         data: callDataUser[0]
        })
        
     } catch (error: any) {
      console.error('Error en callData:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Failed to call Data',
            error: error.message
        });
     }
}

export default callData;

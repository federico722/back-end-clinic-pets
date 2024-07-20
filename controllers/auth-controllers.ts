import { Request ,Response } from "express";
import Auth from '../Dto/authDto';
import UserService from "../services/userServices";
import generateToken from "../Helpers/generateToken";
import dotenv from "dotenv";
dotenv.config();


let auth = async (req: Request, res: Response) => {
    try {
        const { email, contrasenia } = req.body;
        const login = await UserService.login( new Auth(email, contrasenia));
        if (login.logged) {

    // Asegúrate de que login.id exista y sea válido
    console.log(login.id);
    
    
    
      if (!login.id) {
        return res.status(500).json({
          status: 'error',
          message: 'User ID not found after successful login'
        })};
            
            return res.status(200).json({
                status: login.status,
                token: generateToken({id: login.id}, process.env.KEY_TOKEN, 50)
            });
        } else {
            return res.status(401).json({
              status: 'error',
              message: 'Invalid credentials'
            });
          }


    } catch (error) {
        console.error('Error in auth:', error);
        return res.status(500).json({
          status: 'error',
          message: 'Internal server error'
        });
      }
}

export default auth
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
            
            return res.status(200).json({
                status: login.status,
                token: generateToken({id: login.id}, process.env.KEY_TOKEN, 5)
            });
        } 


    } catch (error) {
        console.log(error);
        
    }
}

export default auth
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import register from './routes/registerUser'
import auth from './routes/auth';
import scheduleAppointment from './routes/scheduleAppointment';
import updateProfile from './routes/updateProfile';
import callData from './routes/callDataUser'

import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

app.use(cors());

app.use('/register', register);
app.use('/auth', auth);
app.use('/schedule', scheduleAppointment);
app.use('/editar-perfil', updateProfile);
app.use('/callData', callData);


const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
    console.log("servidor ejecutandose  en el puerto: ", PORT);
}).on("error", (error) =>{
    throw new Error(error.message);
    
});
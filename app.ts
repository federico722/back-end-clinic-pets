import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import register from './routes/registerUser'
import auth from './routes/auth';
import scheduleAppointment from './routes/scheduleAppointment';
import updateProfile from './routes/updateProfile';
import callData from './routes/callDataUser';
import callDate from './routes/callDateUser';
import deleteData from './routes/deleteDataUser';
import callDateAppointment from './routes/callDateAppointmentsUser'
import updateAppointment from './routes/updateAppointmentUser'
import cancelAppointment from './routes/cancelAppointmentUser'
import verifyRolUser from './routes/verifyRol';
import callTutorData from './routes/callTutorData';
import dotenv from "dotenv";
import AdminRepository from "./routes/getAppointmentAdmin";

dotenv.config();

const app = express().use(bodyParser.json());

app.use(cors());

app.use('/register', register);
app.use('/auth', auth);
app.use('/schedule', scheduleAppointment);
app.use('/editar-perfil', updateProfile);
app.use('/callData', callData);
app.use('/callDate', callDate);
app.use('/deleteData', deleteData);
app.use('/callDateAppointments', callDateAppointment);
app.use('/updateAppointment', updateAppointment);
app.use('/updateAppointment', cancelAppointment);
app.use('/verifyRolUser', verifyRolUser);
app.use('/appointments', AdminRepository);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
    console.log("servidor ejecutandose  en el puerto: ", PORT);
}).on("error", (error) =>{
    throw new Error(error.message);
    
});
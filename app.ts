import express from "express";
import bodyParser from 'body-parser';
import register from './routes/register'

import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/register', register);


const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
    console.log("servidor ejecutandose  en el puerto: ", PORT);
}).on("error", (error) =>{
    throw new Error(error.message);
    
});


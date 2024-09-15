import  bodyParser  from 'body-parser';
import  Express  from "express";
import { Request, Response } from 'express';
import { API_KEY_GEMINI, START_CHAT, GENERATE_CONFIG } from '../config/chat-config/config';

import  {GoogleGenerativeAI}  from '@google/generative-ai';
import { GoogleGenerativeAIError } from '@google/generative-ai';
const genAI = API_KEY_GEMINI?.length ? new GoogleGenerativeAI(API_KEY_GEMINI) : null;
const model = genAI?.getGenerativeModel({ model: "gemini-pro"});

if (!genAI || !model) {
   console.error("Error: No se pudo inicializar la API de Google. Verifica tu clave API.");
} else {
   console.log("API de Google inicializada correctamente.");
}

const router = Express.Router();


router.post('', async (req: Request, res: Response) => {
   console.log("Received request:", req.body);
   let history = req.body.history.map((msg: { role: string; parts: string }) => ({
       role: msg.role,
       parts: [{ text: msg.parts }]
   }));
   let question = req.body.question;
   let historyChat: any = START_CHAT.concat(history);

   
   if (!genAI || !model) {
       console.error("API key or model not initialized");
       return res.status(500).json({ message: "API key or model not initialized" });
   }

   const chat = model.startChat({
       history: historyChat,
       generationConfig: GENERATE_CONFIG
   });

   try {
       console.log("Sending question to AI:", question);
       const sendQuestion = await chat.sendMessage([{text: question}]);
       const response = await sendQuestion.response;
       const text = response.text();
       console.log("AI response:", text);

       // Actualizar historial y enviar respuesta
       history.push({role: "user", parts: [{text: question}]});
       history.push({role: "model", parts: [{text: text}]});
       return res.status(200).json({history: history.map((msg: { role: string; parts: { text: string }[] }) => ({
           role: msg.role,
           parts: msg.parts[0].text
       }))});
   } catch (error: any) {
       console.error("Error in AI processing:", error);
       if (error instanceof GoogleGenerativeAIError) {
           return res.status(500).json({ 
               message: "Error en la API de Google", 
               error: error.message,
               details: error.toString()
           });
       }
       return res.status(500).json({ message: "Error processing AI request", error: error.toString() });
   }
});

export default router;

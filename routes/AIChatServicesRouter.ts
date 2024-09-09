import  bodyParser  from 'body-parser';
import  Express  from "express";
import { Request, Response } from 'express';
import { API_KEY_GEMINI, START_CHAT, GENERATE_CONFIG } from '../config/chat-config/config';

import  {GoogleGenerativeAI}  from '@google/generative-ai';
const genAI = API_KEY_GEMINI?.length ? new GoogleGenerativeAI(API_KEY_GEMINI) : null;
const model = genAI?.getGenerativeModel({ model: "gemini-pro"});

const router = Express.Router();

router.post('', async (req: Request, res: Response) => {
    let history = req.body.history;
    let question = req.body.question;
    let historyChat: any = START_CHAT.concat(history)
     const chat = model?.startChat({
        history: historyChat,
        generationConfig: GENERATE_CONFIG
     });
     try {
      const sendQuestion = await chat?.sendMessage(question);
      const response = await sendQuestion?.response;
      const text = response?.text();
      // Actualizar historial y enviar respuesta
      history.push({role: "user", parts: question})
      history.push({role: "model", parts: text})
      return res.status(200).json({history: history});
   } catch (error) {
      console.error("Error en la IA:", error);
      return res.status(500).json({ message: "Error al procesar la IA", error });
   }
    
})

export default router;

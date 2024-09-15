import { Request, Response } from "express";
import IAservice from '../services/IAchatService';
import logger from "../utils/logger";
import { ChatRequest, ChatHistory } from "../models/chatModel";

export const handleChatRequest = async (req: Request, res: Response) => {
    try {
        const { history, question } =  req.body as ChatRequest;
        const iaResponse =  await IAservice.generateResponse(question, history);

        // Actualizar historial
        history.push({ role: 'user', parts: question});
        history.push({ role: 'model', parts: iaResponse});

        logger.info(`Procesado solicitud para usuarios: ${req.ip}`);

        const  response: ChatHistory = { history}
        res.status(200).json(response);
    } catch (error: any) {
        logger.error('Error en el controlador de chat:', error);
        res.status(500).json({ message: "Error al procesar la solicitud de chat", error: error.message});
    }
};
import { API_KEY_GEMINI, START_CHAT, GENERATE_CONFIG } from "../config/chat-config/config";
import logger from '../utils/logger';
import { ChatMessage, ChatHistory, ChatRequest } from "../models/chatModel";
import { GoogleGenerativeAI } from "@google/generative-ai";

class IAService {
    private genAI:  GoogleGenerativeAI;
    private model: any;

     api_key_gemini: any | string = API_KEY_GEMINI;
    

    constructor(){
        this.genAI = new GoogleGenerativeAI(this.api_key_gemini);
        this.model = this.genAI.getGenerativeModel({ model: "gemini-pro"});
    }

    async generateResponse(question:  string, history: ChatMessage[]): Promise <string> {
        try {
            const historyChat = START_CHAT.concat();
            const chat = this.model.startChat({
                history: historyChat,
                generationConfig: GENERATE_CONFIG
            });

            const result = await chat.sendMessage(question);
            const response = await result.response;
            return response.text();
        } catch (error) {
            logger.error('Error generando respuesta IA:', error);
            throw new Error('Error al generar respuesta de IA');
        }
    }
}

export default new IAService;
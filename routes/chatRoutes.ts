import Express from 'express';
import { handleChatRequest } from '../controllers/chatController';
import rateLimit from 'express-rate-limit';

const router =  Express.Router();

const chatLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,// 15 minutos
    max: 100 // límite de 100 solicitudes por ventana
});

router.post('', chatLimiter, handleChatRequest);

export default router;
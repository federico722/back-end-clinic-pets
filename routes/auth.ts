import express from "express";
import authController from '../controllers/auth-controllers';
const router = express.Router();


router.post('/', authController);

export default router;
import express from 'express';
import { uploadFile } from '../controllers/someController';
import multer from 'multer';
import verifyToken from '../middlewere/VerifyToken';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Asegúrate de que esta ruta coincida con la que estás usando en el frontend
router.post('', verifyToken, upload.single('image'), uploadFile);

export default router;
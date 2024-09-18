import  Express  from "express";
import mascotasPerdidas from "../controllers/mascotasPerdidas-controller";
import multer from 'multer';

const router = Express.Router();

const upload = multer({ dest: 'uploads/' }); // Configura el destino donde se guardarán los archivos

router.post('/', upload.single('imagenMascota'), mascotasPerdidas);
export default router;
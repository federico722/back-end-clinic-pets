import express from "express";
import downloadHistorial from "../controllers/controllers--user/downloadHistorial-controller";

const router = express.Router();

router.get('/:idCita', downloadHistorial)
    
export default router;
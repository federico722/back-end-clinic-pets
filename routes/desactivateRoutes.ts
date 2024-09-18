import express from 'express';
import desactivateController from '../controllers/controllers-admin/desactivateController';

const router = express.Router();

// Ruta para desactivar un día
router.post('/desactivateDay', desactivateController.desactivateDay);

// Ruta para activar un dia
router.delete('/activateDay', desactivateController.acivateDay);
// Ruta para desactivar una hora
router.post('/desactivateTime', desactivateController.desactivateTime);

// Ruta para activar una hora
router.delete('/activateTime', desactivateController.activateTime);

// Ruta para obtener días desactivados
router.get('/getDisabledDays', desactivateController.getDisabledDays);

// Ruta para obtener horas desactivadas
router.get('/getDisabledTimes', desactivateController.getDisabledTimes);

export default router;

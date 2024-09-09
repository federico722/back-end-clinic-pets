import { Request, Response } from 'express';
import AdminServices from '../../services/AdminServices';

// Controlador para desactivar un día
const desactivateDay = async (req: Request, res: Response) => {
    try {
        const { date } = req.body;
        // Validación simple
        if (!date) {
            return res.status(400).json({ error: 'Date is required' });
        }
        const result = await AdminServices.desactivateDay(date);
        res.status(200).json(result);
    } catch (error: any) {
        console.error("Error desactivating day:", error);
        res.status(500).json({ error: error.message });
    }
};

// Controlador para desactivar una hora
const desactivateTime = async (req: Request, res: Response) => {
    try {
        const { date, time } = req.body;
        // Validación simple
        if (!date || !time) {
            return res.status(400).json({ error: 'Date and time are required' });
        }
        const result = await AdminServices.desactivateTime(date, time);
        res.status(200).json(result);
    } catch (error: any) {
        console.error("Error desactivating time:", error);
        res.status(500).json({ error: error.message });
    }
};

// Controlador para consultar días desactivados
const getDisabledDays = async (req: Request, res: Response) => {
    try {
        const days = await AdminServices.getDisabledDays();
        res.status(200).json(days);
    } catch (error: any) {
        console.error("Error fetching disabled days:", error);
        res.status(500).json({ error: error.message });
    }
};

// Controlador para consultar horas desactivadas
const getDisabledTimes = async (req: Request, res: Response) => {
    try {
        const times = await AdminServices.getDisabledTimes();
        res.status(200).json(times);
    } catch (error: any) {
        console.error("Error fetching disabled times:", error);
        res.status(500).json({ error: error.message });
    }
};

export default {
    desactivateDay,
    desactivateTime,
    getDisabledDays,
    getDisabledTimes
};

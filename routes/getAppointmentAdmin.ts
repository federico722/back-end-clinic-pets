import Express from "express";
import AdminRepository from "../repositories/AdminRepository";

const router = Express.Router();

router.get("/", async (req, res) => {
    try {
        const appointments = await AdminRepository.getAppointment();
        res.json(appointments);
        console.log('back', appointments); // Revisa el formato de fecha aquí
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments' });
    }
});

export default router;

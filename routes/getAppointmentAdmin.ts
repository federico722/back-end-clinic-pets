import Express from 'express';
import AdminRepository from '../repositories/AdminRepository';

const router = Express.Router();

router.get('/', async (req, res) => {
    try {
        const appointments = await AdminRepository.getAppointment();
        console.log('Fetched appointments:', appointments); // Verifica el formato de los datos
        res.json(appointments);
    } catch (error: any) {
        console.error('Error fetching appointments:', error.message, error.stack); 
        res.status(500).json({ message: 'Error fetching appointments' });
    }
});


export default router;

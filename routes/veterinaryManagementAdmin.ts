import Express from "express";
import AdminRepository from "../repositories/AdminRepository";

const router = Express.Router();

router.get("/", async (req, res) => {
    try {
        const veterinary = await AdminRepository.veterinaryManagement();
        res.json(veterinary);
        console.log('back', veterinary);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching veterinary' });
    }
});

export default router;

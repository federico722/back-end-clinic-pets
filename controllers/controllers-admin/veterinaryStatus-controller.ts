import { Request, Response } from "express";
import VeterinaryStatus from "../../Dto/Dto-Admin/veterinaryStatusDto";
import AdminServices from "../../services/AdminServices";

let veterinaryStatus = async(req: Request, res: Response) => {
    try {
        const { IdVeterinario } = req.body;
        if (!IdVeterinario) {
            return res.status(400).json({
                status: 'error',
                message: 'IdVeterinario is required'
            });
        }
        await AdminServices.veterinaryStatus(new VeterinaryStatus(IdVeterinario));
        res.status(200).json({ status: 'success', message: 'Veterinary status updated successfully' });
    } catch (error: any) {
        console.error('Error updating veterinary status', error);
        return res.status(500).json({
            status: 'error',
            message: 'Failed to update veterinary status',
            error: error.message
        });
    }
}

export default veterinaryStatus;

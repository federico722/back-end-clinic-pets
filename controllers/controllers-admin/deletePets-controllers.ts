import { Request, Response } from "express";
import DeletePet from "../../Dto/Dto-Admin/deletePetsDto";
import AdminServices from "../../services/AdminServices";

let deletePet = async (req:Request, res: Response) => {
    try {

        const IdAdopcionMascota = req.params.IdAdopcionMascota;

        if (typeof IdAdopcionMascota !== 'string') {
            return res.status(400).json({
                status: 'error en el id enviado',
                message: 'no se ha enviado correctamente el id',
            })
        }

        const deletePet: any = await AdminServices.deletePet( new DeletePet(IdAdopcionMascota));

        console.log('deletePet', deletePet);

        if (!deletePet.delete) {
            return res.status(404).json({
                status: deletePet.status,
                message: deletePet.message,
                delete: deletePet.delete
            })
        }

        return res.status(200).json({
            status: deletePet.status,
            message: deletePet.message,
            delete: deletePet.delete
        })
        
    } catch (error: any) {
        console.error('error interno en el servidor', error);
        
        return res.status(500).json({
            status: 'Error',
            message: 'error interno en el servidor',
            error: error.message
        })
    }
}

export default deletePet;
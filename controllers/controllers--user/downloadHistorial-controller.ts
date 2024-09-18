import { Request, Response } from 'express';
import PDFDocument from 'pdfkit';
import UserService from '../../services/userServices';
import DownloadHistorial from '../../Dto/Dto-User/downloadHistorialDto';

const downloadHistorial = async (req: Request, res: Response) => {
    try {
        const { idCita } = req.params;
        const historialData = await UserService.downloadHistorial(new DownloadHistorial(idCita));

        if (!historialData || historialData.length === 0) {
            return res.status(404).json({ error: 'Historial no encontrado' });
        }

        const doc = new PDFDocument();
        res.setHeader('Content-disposition', 'attachment; filename=historial.pdf');
        res.setHeader('Content-type', 'application/pdf');
        doc.pipe(res);

        // Asumiendo que historialData es un array con un solo objeto
        const historial = historialData[0];

        doc.fontSize(16).text('Historial de Cita', { underline: true });
        doc.moveDown();

        doc.fontSize(14).text('Información del Veterinario');
        doc.fontSize(12).text(`Nombre: ${historial.nombreVeterinario}`);
        doc.text(`Título de Especialidad: ${historial.tituloEspecialidad}`);
        doc.text(`Especialidad: ${historial.especialidadMedicina}`);
        doc.text(`Teléfono: ${historial.telefono}`);
        doc.text(`Email: ${historial.email}`);
        doc.moveDown();

        doc.fontSize(14).text('Información del Usuario');
        doc.fontSize(12).text(`Nombre: ${historial.nombre}`);
        doc.text(`Teléfono: ${historial.telefono}`);
        doc.text(`Dirección: ${historial.direccion}`);
        doc.text(`Email: ${historial.email}`);
        doc.moveDown();

        doc.fontSize(14).text('Información de la Mascota');
        doc.fontSize(12).text(`Nombre: ${historial.nombreMascota}`);
        doc.text(`Edad: ${historial.edadMascota}`);
        doc.text(`Especie: ${historial.especie}`);
        doc.text(`Raza: ${historial.raza}`);
        doc.moveDown();

        doc.fontSize(14).text('Detalles de la Cita');
        doc.fontSize(12).text(`Motivo de Consulta: ${historial.motivoConsulta}`);
        doc.text(`Tratamiento: ${historial.tratamiento}`);
        doc.text(`Diagnóstico: ${historial.diagnostico}`);
        doc.text(`Examen Médico: ${historial.examenMedico}`);

        doc.end();
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export default downloadHistorial;

import { Request as ExpressRequest, Response } from "express";
import { uploadFileToBlob } from "../services/azureBlobService";
import fs from 'fs';

interface Request extends ExpressRequest {
  file?: Express.Multer.File;
}

export const uploadFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No se ha subido ningún archivo" });
    }

    const filePath = req.file.path;
    const fileName = `${Date.now()}-${req.file.originalname}`; // Nombre único para el archivo

    // Subir el archivo al Blob de Azure
    const blobUrl = await uploadFileToBlob(filePath, fileName);

    // Eliminar el archivo temporal después de subirlo a Azure
    fs.unlink(filePath, (err) => {
      if (err) console.error('Error al eliminar el archivo temporal:', err);
    });

    res.status(200).json({ message: "Archivo subido exitosamente", url: blobUrl });
  } catch (error: any) {
    console.error('Error en uploadFile:', error);
    res.status(500).json({ message: error.message });
  }
}
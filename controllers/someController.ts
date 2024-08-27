import { Request as ExpressRequest, Response } from "express";
import { uploadFileToBlob } from "../services/azureBlobService";

interface Request extends ExpressRequest {
    file?: Express.Multer.File | any ; 
}


export const uploadFile = async (req: Request , res: Response) => {
    try {

        if (!req.file) {
            return res.status(400).json({ message: "No se ha subido ningún archivo" });
          }
          
        const filePath = req.file.path; // Assuming you're using a middleware like multer to handle file uploads
        const fileName = req.file.filename;

        const blobUrl = await uploadFileToBlob(filePath, fileName);
    
        res.status(200).json({ message: "File uploaded successfully", url: blobUrl });
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
}
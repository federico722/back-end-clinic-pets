// services/azureBlobService.ts
import { blobServiceClient } from "../config/azureConfig";
import { BlockBlobClient } from "@azure/storage-blob";

const containerName = "imagenesclinicpetstiendaadopciones" // nombre del contenedor en azure

async function uploadFileToBlob(filePath: string, fileName: string): Promise<string> {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient: BlockBlobClient = containerClient.getBlockBlobClient(fileName);

    const contentType = fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') ? 'image/jpeg' : 'image/png';

    const response = await blockBlobClient.uploadFile(filePath, {
      blobHTTPHeaders: { blobContentType: contentType }
    });
  
    if (response._response.status !== 201) {
      throw new Error(`Failed to upload file to blob. Status code: ${response._response.status}`);
    }
  
    return blockBlobClient.url;
  }

  export { uploadFileToBlob};
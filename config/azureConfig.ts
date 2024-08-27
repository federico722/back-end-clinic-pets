
// config/azureConfig.ts
import { BlobServiceClient } from '@azure/storage-blob';

const connectionString = process.env.ACCESS_KEY1_AZURE as string;
if (!connectionString) {
    throw new Error("Azure Storage connection string is not defined in .env file.");
}

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

export {blobServiceClient};


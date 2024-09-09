import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import { API_KEY_GEMINI } from "../config/chat-config/config";

const genAI = API_KEY_GEMINI?.length ? new GoogleGenerativeAI(API_KEY_GEMINI) : null;

interface InlineData {
    data: string;
    mimeType: string;
}

interface GenerativePart {
    inlineData: InlineData;
}

function fileToGenerativePart(path: string, mimeType: string): GenerativePart {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

async function isPetImage(imagePath: string): Promise<boolean> {
    if (!genAI) {
        throw new Error("API key not set or invalid");
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "¿El objeto en la imagen corresponde a un animal doméstico?";

    const imagePart = fileToGenerativePart(imagePath, "image/jpeg");

    const result = await model.generateContent([
        { text: prompt },
        imagePart
    ]);

    const response = await result.response;
    const text = response.text().toLowerCase();

    return text.includes("sí") || text.includes("es un animal doméstico");
}

async function validatePetAdoption(imagePaths: string[]): Promise<boolean> {
    for (const imagePath of imagePaths) {
        const isPet = await isPetImage(imagePath);
        if (!isPet) {
            return false;
        }
    }
    return true;
}

export { validatePetAdoption };


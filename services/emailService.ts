import { EmailClient } from "@azure/communication-email";

const connectionString: string = process.env.AZURE_COMMUNICATION_CONNECTION_STRING || '';
const emailClient = new EmailClient(connectionString);

export async function sendWelcomeEmail(to: string, name: string) {
    try {
        const emailMessage = {
            senderAddress: "DoNotReply@cda3ab85-c8dd-4e0c-a606-4344bca741eb.azurecomm.net",
            content: {
                subject: "Bienvenido a Clinic Pet's",
                plainText: `Hola ${name}, bienvenido a nuestra clínica veterinaria.`,
                html: `
                <h1>Bienvenido ${name}</h1><p>Gracias por registrarte en nuestra clínica veterinaria.</p>
                `
            },
            recipients: {
                to: [{ address: to }],
            }
        };

        const poller = await emailClient.beginSend(emailMessage);
        const result = await poller.pollUntilDone();
        
        
        console.log(`Email sent successfully. Status: ${result.status}`);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

/*

const { EmailClient } = require("@azure/communication-email");

// Este código recupera la cadena de conexión de una variable de entorno.
const connectionString = "endpoint=https://grupo-email-clinicpets.unitedstates.communication.azure.com/;accesskey=5pho5keVd4nCBqICMPMKUiSd9GSqXGcqMdho9IzXG4mdFJMbF7d9JQQJ99AHACULyCps5mg0AAAAAZCSNhVo";
const client = new EmailClient(connectionString);

async function main() {
    const emailMessage = {
        senderAddress: "DoNotReply@cda3ab85-c8dd-4e0c-a606-4344bca741eb.azurecomm.net",
        content: {
            subject: "Correo electrónico de prueba",
            plainText: "Hola mundo por correo electrónico.",
        },
        recipients: {
            to: [{ address: "fedemanu722@gmail.com" }],
        },
    };

    const poller = await client.beginSend(emailMessage);
    const result = await poller.pollUntilDone();
}

main();

*/

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
                 <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { text-align: center; font-family: Arial, sans-serif; background-color: #f7f7f7; margin: 0; padding: 20px; }
                .container { background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); padding: 20px; max-width: 600px; margin: auto; }
                h2 { color: #98d79b; font-size: 24px; margin-bottom: 20px; }
                .p1 { font-size: 18px; color: #555555; margin-bottom: 15px; }
                p { font-size: 16px; color: #777777; line-height: 1.6; margin: 0 0 15px 0; }
                .contact { background-color: #f0f0f0; border-radius: 5px; padding: 10px; display: flex; justify-content: space-around; align-items: center; }
                .contact h4 { font-size: 18px; color: #98d79b; margin-bottom: 10px; }
                .contact p { font-size: 16px; color: #333333; margin: 5px 0; }
                img { height: 100px; width: 100px; border-radius: 5%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);  margin-right: 10px; padding-right: 5px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Hola ${name}</h2>
                <section>
                    <p class="p1">¡Gracias por registrarte en la aplicación de Clinic Pet's!</p>
                    <p>Estamos encantados de que te unas a nuestra comunidad y de que confíes en nosotros para el cuidado de sus mascotas. Nuestra aplicación está diseñada para facilitarte la gestión de las citas, el seguimiento de la salud y el acceso a toda la información que necesitas para el bienestar de tu mascota.</p>
                    <div class="contact">
                        <div class="content-img">
                            <h4>Contáctanos</h4>
                            <p><b>Dirección:</b><br>Dirección de la veterinaria</p>
                            <p><b>Correo:</b><br>tamvovetMontenegro@gmail.com</p>
                            <p><b>Teléfono:</b><br>3215647887</p>
                        </div>
                        <img src="https://imagenesclinicpets.blob.core.windows.net/imagenesclinicpetstiendaadopciones/logo-Clinic_Pets.png" alt="Logo Clínica Veterinaria">
                    </div>
                </section>
            </div>
        </body>
        </html>
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

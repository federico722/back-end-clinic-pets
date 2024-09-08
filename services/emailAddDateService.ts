import { EmailClient } from "@azure/communication-email";

const connectionString: string = process.env.AZURE_COMMUNICATION_CONNECTION_STRING || '';
const emailClient = new EmailClient(connectionString);

export async function emailAddDateService(to: string, name: string, fecha: string, hora: string, tipoCita: string, nombreMascota: string) {
    try {
        const emailMessage = {
            senderAddress: "DoNotReply@cda3ab85-c8dd-4e0c-a606-4344bca741eb.azurecomm.net",
            content: {
                subject: "Bienvenido a Clinic Pet's",
                plainText: `Hola ${name}, su cita a sido agendada.`,
                html: `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            /margin: 50px;/
            font-family: Georgia, 'Times New Roman', Times, serif;
            padding: 0 15%;
        }
        section {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
        }
        .p1 {
            font-size: 20px;
        }
        .contact {
            border: 1px solid rgb(219, 182, 236);
            border-radius: 10%;
            padding: 10px;
        }
        .contact h4,
        .contact p {
            margin: 0;
        }
        .content-img {
            border: 1px solid rgb(56, 56, 56);
            border-radius: 50%;
            padding: 10px;
        }
        img {
            height: 230px;
            width: 230px;
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <h2>Hola ${name}</h2>
    <section>
        <p class="p1">Gracias por preferirnos, tu cita ha sido agendada exitosamente tambovovetMontenegro!</p>
        <h4>Detalles de la cita </h4>
        <p><b>Fecha: </b>${fecha}</p>
        <p><b>Hora: </b>${hora}</p>
        <p><b>Nombre mascota: </b>${nombreMascota}</p>
        <p><b>Tipo de cita: </b>${tipoCita}</p>
        <div>
            <p><b>Dirección:</b><br>Montenegro</p>
        </div>
        <div class="contact">
            <h4>Contáctanos</h4>
            <p><b>Correo:</b><br>tamvovetMontenegro@gmail.com</p>
            <p><b>Teléfono:</b><br>3215647887</p>
        </div>
    </section>
    <div class="content-img">
        <img src="https://imagenesclinicpets.blob.core.windows.net/imagenesclinicpetstiendaadopciones/logo-Clinic_Pets.png" alt="">
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
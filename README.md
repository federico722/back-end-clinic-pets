# Clinic Pet’s - Plataforma Web

## Descripción del Proyecto

Clinic Pet’s es una plataforma web diseñada para optimizar la gestión de citas médicas veterinarias, manejo de productos para mascotas, estrategias publicitarias, y facilitar la adopción de animales. Además, mejora la organización de horarios para los médicos veterinarios y permite el seguimiento del historial clínico de mascotas, así como el rastreo de mascotas desaparecidas. La plataforma tiene como objetivo proporcionar soluciones eficientes para usuarios, administradores y médicos veterinarios, incrementando la calidad del servicio ofrecido.

## Tecnologías Utilizadas

El proyecto utiliza las siguientes tecnologías y herramientas:

- **Node.js**: v22.4.0
- **MySQL**: MySQL Workbench
- **Librerías y Dependencias**:
  - `@azure/communication-email`: ^1.0.0
  - `@azure/storage-blob`: ^12.24.0
  - `@google/generative-ai`: ^0.17.1
  - `@types/express-rate-limit`: ^6.0.0
  - `axios`: ^1.7.7
  - `bcryptjs`: ^2.4.3
  - `blob-stream`: ^0.1.3
  - `cors`: ^2.8.5
  - `dotenv`: ^16.4.5
  - `express`: ^5.0.0
  - `express-rate-limit`: ^7.4.0
  - `express-validator`: ^7.1.0
  - `joi`: ^17.13.3
  - `jsonwebtoken`: ^9.0.2
  - `mongoose`: ^8.6.1
  - `multer`: ^1.4.5-lts.1
  - `mysql2`: ^3.10.2
  - `nodemon`: ^3.1.4
  - `pdfkit`: ^0.15.0
  - `stripe`: ^16.11.0
  - `winston`: ^3.14.2
  - **DevDependencies**:
    - `@types/bcryptjs`: ^2.4.6
    - `@types/cors`: ^2.8.17
    - `@types/dotenv`: ^8.2.0
    - `@types/express`: ^4.17.21
    - `@types/express-validator`: ^3.0.0
    - `@types/jsonwebtoken`: ^9.0.6
    - `@types/multer`: ^1.4.12
    - `@types/pdfkit`: ^0.13.4
    - `typescript`: ^5.5.3

## Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes componentes:

- **Node.js**: v22.4.0 o superior
- **MySQL**: Para la base de datos
- **Git**: Para clonar el repositorio
- **NPM**: Para gestionar las dependencias del proyecto

## Instalación

Sigue los siguientes pasos para instalar y ejecutar el proyecto en tu entorno local:

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/usuario/proyecto-clinic-pets.git

2. Instalar las dependencias:
   ```bash
   cd back-end-clinic-pets
   npm install

3. Configurar el archivo .env con tus credenciales de base de datos y demás configuraciones necesarias.

- **KEY_TOKEN**:  Necesitas crear una llave token, para usar jsonwebtoken, puede ser cualquie combinacion de caracteres ej: KEY_TOKEN =5ll%694llaveoculta
- **ACCESS_KEY1_AZURE**: Necesitas la llave de acceso azure, del blob service de Microsoft azure 
- **AZURE_COMMUNICATION_CONNECTION_STRING**: Necesitas la cadena de conexion del email service de Microsoft azure
- **senderAddress**: Necesitas el correo generado en el email service de Microsoft azure
- **KEY_GEMINI**: Necesitas la llave del servicio de gemini

4. Iniciar el servidor de desarrollo.
   ```bash
   node ./dist/app


 
import dotenv from "dotenv";
dotenv.config();

const API_KEY_GEMINI = process.env.KEY_GEMINI;
const GENERATE_CONFIG = {
    stopSequences: ["red"],
    maxOutputTokens: 1000,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
};

const START_CHAT = [
    {
        role: 'user',
        parts: `Nombre de la Clinica: Tamvobet

        Misión: En Tamvobet nos dedicamos a ofrecer a nuestros usuarios el mejor servicio que disponemos para atender a sus mascotas, con un excepcional cuidado medico de nuestros veterinarios.

        Visión: Nos visualizamos como un apoyo a la comunidad al atender a las mascotas de nuestros usuarios a un precio accesible, y contamos con una gran cantidad de todo tipo de productos para mascotas.

        Fecha de creacion: Tambovet fue fundada en el año 2011, para ofrecer un punto de atencion veterinaria para las comunidades cercanas.

        Descripcion General: 
         Tamvobet se distingue por su eficiencia y cuidados medicos veterinarios a una gran cantidad de todo tipo de animales domesticos gracias a nuestros expertos veterinarios.

         Tambien contamos con una gran cantidad de articulos para distintos tipos de mascotas, que incluyen accessorios, medicamentos, alimentos, juguetes 

         Nuestro servicio al cliente es recomendado por ofrecer un cuidado excepcional al momento de tratar a las mascotas de nuestros usuarios.
        `
    },
    {
        role: "model",
        parts: "Servicios tamvobet",
    }
]

export {API_KEY_GEMINI, START_CHAT, GENERATE_CONFIG};
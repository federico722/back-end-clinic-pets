import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

import register from './routes/registerUser'
import auth from './routes/auth';
import scheduleAppointment from './routes/scheduleAppointment';
import updateProfile from './routes/updateProfile';
import callData from './routes/callDataUser';
import callDate from './routes/callDateUser';
import deleteData from './routes/deleteDataUser';
import callDateAppointment from './routes/callDateAppointmentsUser'
import updateAppointment from './routes/updateAppointmentUser'
import cancelAppointment from './routes/cancelAppointmentUser'
import verifyRolUser from './routes/verifyRol';
import callTutorData from './routes/callTutorData';
import AskForAllPets from './routes/askForAllPets';
import getAppointmentAdmin from './routes/getAppointmentAdmin';
//import disabledTimesRoutes from './routes/disabledTimesRoutes'; // Asimport AdminRepository from "./routes/getAppointmentAdmin";
import RecoverPassword from './routes/recoverPassword';
import addProductsAdmin from "./routes/addProductsAdmin";
import createHistorialMedicVet from "./routes/createHistorialVet";
import AddProductCart from "./routes/addProductsCartUser";
import addPetUser from "./routes/addPetsUser";
import deleteProductCart from "./routes/deleteProductCart";
import registerVet from "./routes/registerVet";
import UpdatePets from "./routes/updatePets";
import AskForAllProducts from './routes/askForAllProducts';
import fileRoutes from "./routes/fileRoutes";
import DeleteProduct from "./routes/deleteProduct";
import UploadProductId from "./routes/uploadProductId";
import uploadProductUser from "./routes/uploadProductUser";
import updateCartProduct from "./routes/updateProductCart";
import RemoveAllProduct from "./routes/removeAllProduct";
import AskProductInfo from "./routes/askProductInfo";
import UpdateProduct from "./routes/updateProduct";
import callCardsPets from "./routes/callCardsPets";
import IAchat from "./routes/AIChatServicesRouter";
import UploadPetId from "./routes/uploadPetId";
import deletePet from "./routes/deletePet";
import chatRoutes from "./routes/chatRoutes";   

import veterinaryManagement from "./routes/veterinaryManagementAdmin"
import veterinaryStatus from "./routes/veterinaryStatusAdmin";
import dotenv from "dotenv";

dotenv.config();

const app = express().use(bodyParser.json());

app.use(cors());

app.use('/register', register);
app.use('/registerVet', registerVet);
app.use('/auth', auth);
app.use('/schedule', scheduleAppointment); 
app.use('/editar-perfil', updateProfile);
app.use('/callData', callData);  
app.use('/callDate', callDate);
app.use('/callTutorData',callTutorData);
app.use('/deleteData', deleteData);
app.use('/callDateAppointments', callDateAppointment);
app.use('/updateAppointment', updateAppointment);
app.use('/cancelAppointment', cancelAppointment);
app.use('/verifyRolUser', verifyRolUser);
//app.use('/appointments', AdminRepository);
app.use('/recoverPassword', RecoverPassword);
app.use('/addProductsAdmin', addProductsAdmin);  // agregar productos por el admin
app.use('/createHistorialMedicVet',createHistorialMedicVet); // crear historial medico  por el vet
app.use('/addProductCart', AddProductCart); // !agregar productos al carrito del usuario
app.use('/addPetsUser', addPetUser); // agregar mascotas por el usuario
app.use('/deleteProductCart', deleteProductCart); // eliminar todos los productos agregados al carrito del usuario
app.use('/askForAllPets', AskForAllPets); // llamar a todas las mascotas
app.use('/updatePets', UpdatePets ); // actualiza los datos de la mascota 
app.use('/askAllForProducts', AskForAllProducts); // llamar a todos los productos
app.use('/deleteProduct', DeleteProduct); //eliminar producto
app.use("/filesUpload", fileRoutes); 
app.use("/uploadProductId", UploadProductId);
app.use("/uploadProductUser", uploadProductUser);// !subir productos al carrito
app.use("/actualizarCantidadProductoCarrito", updateCartProduct); // !actualiza la cantidad  del carrito 
app.use("/removeAllProductCart", RemoveAllProduct); //! remover productos 
app.use('/askProductInfo',AskProductInfo ); //! mostrar productos para actualizar
app.use('/updateProduct', UpdateProduct);
app.use('/askPetsData', callCardsPets); // ! llamar cards de mascotas
app.use('/veterinaryManagement', veterinaryManagement);
app.use('/veterinaryStatus', veterinaryStatus);
app.use('/uploadPetId', UploadPetId);
app.use('/deletePet', deletePet);
app.use('/chat', IAchat);
app.use('/chatIA', chatRoutes);
app.use('/admin', getAppointmentAdmin); // Ruta para las funciones del admin

//app.use('/disabledTimes', );
const PORT = process.env.PORT || 10101;


app.listen(PORT, () => {
    console.log("servidor ejecutandose  en el puerto: ", PORT);
}).on("error", (error) =>{
    throw new Error(error.message);
});
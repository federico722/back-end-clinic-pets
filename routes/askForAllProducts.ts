import  Express  from "express";
import askForAllProducts from "../controllers/controllers-admin/askForAllProducts-controllers";
import verifyToken from "../middlewere/VerifyToken";

const routes = Express.Router();

routes.get('', askForAllProducts);

export default routes;
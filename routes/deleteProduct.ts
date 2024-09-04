import Express from "express";
import deleteProduct from "../controllers/controllers-admin/deleteProduct-controllers";

const router = Express.Router();

router.delete('', deleteProduct);

export default router;
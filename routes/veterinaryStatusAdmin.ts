import Express from "express";
import AdminRepository from "../repositories/AdminRepository";
import veterinaryStatus from "../controllers/controllers-admin/veterinaryStatus-controller";

const router = Express.Router();

router.put('/',  veterinaryStatus);


export default router;

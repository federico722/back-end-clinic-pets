import  Express  from "express";
import { uploadFile } from "../controllers/someController";
import multer from "multer";

const router = Express.Router();
const upload = multer({ dest: "uploads/"});

router.post("/upload", upload.single("file"), uploadFile);

export default router;



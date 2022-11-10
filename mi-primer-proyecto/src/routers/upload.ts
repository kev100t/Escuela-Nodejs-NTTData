import { Router } from "express";
import { addFile } from "../controllers/upload";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), addFile);

export { router };

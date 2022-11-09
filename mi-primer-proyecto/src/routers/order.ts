import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get('/', logMiddleware, checkJwt, getItems);

export { router };

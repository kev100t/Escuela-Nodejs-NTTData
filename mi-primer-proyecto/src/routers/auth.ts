import { Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";
import { logMiddleware } from "../middleware/log";

const router = Router();
// http://localhost:3001/auth/register|login [POST]
router.post("/register", logMiddleware, registerCtrl);
router.post("/login", logMiddleware, loginCtrl);

export { router };

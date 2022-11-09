import { Router, Request, Response } from "express";
import { addItem, deleteItem, getItem, getItems, updateItem } from "../controllers/items";
import { logMiddleware } from "../middleware/log";

const router = Router();

// http://localhost:3000/items [GET|POST|DELETE|PUT]
router.get('/:id',logMiddleware, getItem);
router.get('/', logMiddleware, getItems);
router.post('/',logMiddleware, addItem);
router.put("/:id",logMiddleware, updateItem);
router.delete("/:id",logMiddleware, deleteItem);

export { router };

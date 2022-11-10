"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const items_1 = require("../controllers/items");
const log_1 = require("../middleware/log");
const router = (0, express_1.Router)();
exports.router = router;
// http://localhost:3000/items [GET|POST|DELETE|PUT]
router.get("/:id", log_1.logMiddleware, items_1.getItem);
router.get("/", log_1.logMiddleware, items_1.getItems);
router.post("/", log_1.logMiddleware, items_1.addItem);
router.put("/:id", log_1.logMiddleware, items_1.updateItem);
router.delete("/:id", log_1.logMiddleware, items_1.deleteItem);

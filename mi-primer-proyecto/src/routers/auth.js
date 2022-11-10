"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const log_1 = require("../middleware/log");
const router = (0, express_1.Router)();
exports.router = router;
// http://localhost:3001/auth/register|login [POST]
router.post("/register", log_1.logMiddleware, auth_1.registerCtrl);
router.post("/login", log_1.logMiddleware, auth_1.loginCtrl);

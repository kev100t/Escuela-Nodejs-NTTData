"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = require("./routers");
const mongo_1 = __importDefault(require("./config/mongo"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)( /* {
origin: ['http://localhost:3000']
} */));
app.use(express_1.default.json());
app.use(routers_1.router);
(0, mongo_1.default)()
    .then(() => console.log("Your connect to database"))
    .catch((e) => {
    console.error(`error: ${e}`);
});
app.listen(PORT, () => console.log(`Listo en el puerto ${PORT}`));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = void 0;
const error_handler_1 = require("../utils/error.handler");
const getItems = (req, res) => {
    try {
        res.send({
            data: "Esto solo es accesible con session (JWT)",
            user: req.user,
        });
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, "HTTP_GET_BLOGS");
    }
};
exports.getItems = getItems;

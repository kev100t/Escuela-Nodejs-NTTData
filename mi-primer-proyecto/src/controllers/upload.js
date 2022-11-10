"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFile = void 0;
const upload_1 = require("../services/upload");
const error_handler_1 = require("../utils/error.handler");
const addFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, file } = req;
        const dataToRegister = {
            fileName: `${file === null || file === void 0 ? void 0 : file.filename}`,
            idUser: `${user === null || user === void 0 ? void 0 : user.id}`,
            path: `${file === null || file === void 0 ? void 0 : file.path}`,
        };
        const response = yield (0, upload_1.registerUpload)(dataToRegister);
        res.send(response);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, "HTTP_GET_BLOGS");
    }
});
exports.addFile = addFile;

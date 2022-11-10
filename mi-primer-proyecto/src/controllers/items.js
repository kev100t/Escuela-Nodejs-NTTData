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
exports.deleteItem = exports.updateItem = exports.addItem = exports.getItems = exports.getItem = void 0;
const item_1 = require("../services/item");
const error_handler_1 = require("../utils/error.handler");
const getItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, item_1.getCar)(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, "ERROR_GET_ITEM", e);
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, item_1.getCars)();
        res.send(response);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, "ERROR_GET_ITEMS", e);
    }
});
exports.getItems = getItems;
const updateItem = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, item_1.updateCar)(id, body);
        res.send(response);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, "ERROR_UPDATE_ITEM", e);
    }
});
exports.updateItem = updateItem;
const addItem = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseItem = yield (0, item_1.insertCar)(body);
        res.send(responseItem);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, "ERROR_ADD_ITEM", e);
    }
});
exports.addItem = addItem;
const deleteItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, item_1.deleteCar)(id);
        res.send(response);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, "ERROR_DELETE_ITEM", e);
    }
});
exports.deleteItem = deleteItem;

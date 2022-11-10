"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    modelCar: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    fuel: {
        type: String,
        enum: ["gasoline", "electric", "diesel", "alcohol"],
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const ItemModel = (0, mongoose_1.model)("items", ItemSchema);
exports.default = ItemModel;

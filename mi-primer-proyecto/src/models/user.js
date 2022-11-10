"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        unique: true,
        type: String,
    },
    description: {
        default: "Usuario nuevo creado...",
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const UserModel = (0, mongoose_1.model)("users", UserSchema);
exports.default = UserModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (response, error, errorRaw) => {
    console.log(errorRaw);
    response.status(500);
    response.send({ error });
};
exports.handleHttp = handleHttp;

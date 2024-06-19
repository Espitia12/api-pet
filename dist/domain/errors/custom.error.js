"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(//2
    // 3
    statusCode, message) {
        //4
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
    // 5
    static badRequest(message) {
        return new CustomError(400, message);
    }
    static unauthorized(message) {
        return new CustomError(401, message);
    }
    static forbidden(message) {
        return new CustomError(403, message);
    }
    static notFound(message) {
        return new CustomError(404, message);
    }
    static internalServer(message = 'Internal Server Error') {
        return new CustomError(500, message);
    }
}
exports.CustomError = CustomError;

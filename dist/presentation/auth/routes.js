"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("./controllers"); // 1
const infraestructure_1 = require("../../infraestructure"); // 5
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infraestructure_1.AuthDataSourceImpl(); //6
        const AuthRepository = new infraestructure_1.AuthRepositoryImpl(datasource); //7
        const controller = new controllers_1.AuthController(AuthRepository); // 2 // 8 actulizacion
        // Definir todas mis rutas especificas
        router.post('/login', controller.loginUser); // 3
        router.post('/register', controller.registerUser); // 4
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;

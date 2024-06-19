"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("../../domain");
class AuthController {
    constructor(authRepository //9
    ) {
        this.authRepository = authRepository;
        this.registerUser = (req, res) => {
            const [error, registerUserDto] = domain_1.RegisterUserDto.create(req.body); // Llamamos el metodo create de DTO RegisterUserDto, y pasamos el cuerpo de la solicitud, con esto validaremos los datos que proporcionamos en la respuesta del cuerpo || si esta es exitosa devolvemos dos elementos || error cualquier error de validacion que ocurra || registerUserDto el objeto DTO creado a partir de los datos de entrada
            if (error)
                return res.status(400).json({ error }); // Creamos un condicional para verificar si hay un error de validacion y si es así devolvemos una resputa HTTP 400 junto a un objeto JSON que contiene el error, con esto indicamos que los datos entregados no fueron validados por el DTO
            this.authRepository.register(registerUserDto)
                .then(user => res.json(user))
                .catch(error => res.status(500).json(error)); // Si no tenemos errores de validacion devolvemos una respuesta JSON con el objeto registerUserDto, lo que nos da una validacion exitosa
        };
        this.loginUser = (req, res) => {
            res.json('loginUser controller');
        };
    }
}
exports.AuthController = AuthController;

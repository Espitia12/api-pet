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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    // El parametro options debe cumplir con la interfaz Options
    constructor(options) {
        this.app = (0, express_1.default)();
        const { port = 3100, routes } = options; // Pasamos al constructor el objeto options el cual sera desestructurado, {port = 3100} con esto asignamos una variable llamada port con un valor depreterminado que sera 3100(por si la propiedad no esta presente en options), despues extraeremos la propiedad port del objeto options y asignarla a la variable ya creada.
        this.port = port; // con esto asignamos el valor actual(sea 3100 o el nuevo valor asignado) a this.port
        this.routes = routes;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            // Middlewares
            this.app.use(express_1.default.json()); // Con este Middleware lo utilizamos para analizar el cuerpo de las solicitudes con formato JSON, con esto podemos enviar datos desde un cliente atraves de solicitudes POST o PUT con formato JSON.
            this.app.use(express_1.default.urlencoded({ extended: true })); // Con este Middleware analizamos el cuerpo de las solicitudes entrantes codificadas en url, Algunos formularios Html envian datos utilizando este formato, con el parametro extended: true permitimos analizar los datos complejos en la url como estos mismo enviados desde formularios html que contienen matrices o objetos anidados
            // Usar las rutas definidas
            this.app.use(this.routes);
            //Hacemos que la funcion asincronica se ejecute con el puerto actual
            this.app.listen(this.port, () => {
                console.log(`Server is running on port ${this.port}`);
            });
        });
    }
}
exports.Server = Server;

import { envs } from "./config";
import { MongoDatabase } from "./data/mongodb";
import {AppRoutes} from './presentation/routes';
import {Server} from './presentation/server';

(() => {
    main(); // Creamos una funcion anonima que estara autoinvocada
})()

 async function main() {
     // todo: await base de datos
     await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL,
     })
    // todo: inicio de nuestro server
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
     }).start();// creamos una instancia y llamamos el metodo start para ejecutrala
 }
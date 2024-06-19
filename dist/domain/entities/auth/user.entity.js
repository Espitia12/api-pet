"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
// Definimos una clase con funciones relacionadas con los usuarios de nuestra aplicacion
class UserEntity {
    // Creamos el constructor el cual se ejecutara solo, lo usaremos para inicializar los atributos de nuestra instancia
    constructor(
    //Definimos cada uno de los atributos 
    id, name, email, password, role, // Representamos los roles de usuario como un array de cadenas
    img) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.img = img;
    } // Cerramos el constructor
}
exports.UserEntity = UserEntity;

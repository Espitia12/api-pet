// Definimos una clase con funciones relacionadas con los usuarios de nuestra aplicacion
export class UserEntity {
    // Creamos el constructor el cual se ejecutara solo, lo usaremos para inicializar los atributos de nuestra instancia
    constructor(
        //Definimos cada uno de los atributos 
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public role: string[],// Representamos los roles de usuario como un array de cadenas
        public img?: string, // Creamos una imagen que sera opcional y se reprensetara como un string
    ){} // Cerramos el constructor
}
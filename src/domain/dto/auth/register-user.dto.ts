import { Validators } from "../../../config";

// Definimos una clase con funciones de confirmacion 
export class RegisterUserDto {
    private constructor(
        public name: string,
        public email: string,
        public password: string,
    ) {} // Cerramos el Contructor
    
        // Creamos un metodo static para que podamos llamarlo sin hacer ninguna instancia de este mismo || este metodo va tomar un parametro llamado object lo que hacemos es que este pueda contener cualquier cantidad de propiedades tipo string y cualquier valor tipo any
        static create( object: {[key: string]: any; } ): [ string?, RegisterUserDto?] {
             
            const { name, email, password} = object; // Asignamos los valores a cada uno de los atributos

            // Creamos mensajes de error en este caso si llegan hacer nulas y siel password en menor a 6
            if ( !name ) return [ 'Missing name' ]; 
            if ( !email ) return [ 'Missing email' ]; 
            if ( !Validators.email.test( email ) ) return [ 'Email is not valid' ]; // Utilizamos el metodo email y testeamos que el parametro que pasamos coincida con la expresion regular en este caso el validador de email
            if ( !password ) return [ 'Missing password' ]; 
            if ( password.length < 6 ) return [ 'Password too short' ]; 

            return [
                undefined,
                new RegisterUserDto( name, email, password )
            ]; // Retornamos una tupla donde como primer elemento tenemos un undefined que indica que no hay ningun error y realizara la creacion de un nuevo usuario || por otro lado creamos una instacia de RegisterUserDto y pasamos como argumentos name, email y password donde se recibieron como parametros del metodo create
        }
}
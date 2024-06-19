// Creamos una clase para validar un correo
export class Validators {
    // Creamos un metodo static para que este sea llamado sin crear una instacia de este mismo
    static get email() {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Con esto validamos si el correo comienza con caracteres alfanumericos, puntos, guiones || validamos si tiene un simbolo @ || validamos si tiene uno o mas caracteres alfanumericos, puntos o guiones || validamos si tiene punto || y finalmente validamos si termina con 2 y 6 letras
    }
}
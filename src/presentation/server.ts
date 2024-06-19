import express, {Router} from 'express';

// Esta funciones es una caracterestica de TypeScript que permite definir una estructura de tipos, en este caso Options sera el nombre de la interfaz
interface Options{
    port?: number;// el signo ? indica que sera una propiedad opcional es decir, puede estar presente o no en un objeto que coincida con esta interfaz | number indica que si esta propiedad se encuentra  en un objeto de la interfaz, su valor debera ser numerico
    routes: Router;
}

export class Server {

    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;

    // El parametro options debe cumplir con la interfaz Options
    constructor( options: Options) {
        const { port = 3100, routes} = options;// Pasamos al constructor el objeto options el cual sera desestructurado, {port = 3100} con esto asignamos una variable llamada port con un valor depreterminado que sera 3100(por si la propiedad no esta presente en options), despues extraeremos la propiedad port del objeto options y asignarla a la variable ya creada.
        this.port = port;// con esto asignamos el valor actual(sea 3100 o el nuevo valor asignado) a this.port
        this.routes = routes;
    }

    async start() {

        // Middlewares
        this.app.use( express.json() ); // Con este Middleware lo utilizamos para analizar el cuerpo de las solicitudes con formato JSON, con esto podemos enviar datos desde un cliente atraves de solicitudes POST o PUT con formato JSON.
        this.app.use( express.urlencoded({ extended: true }) ); // Con este Middleware analizamos el cuerpo de las solicitudes entrantes codificadas en url, Algunos formularios Html envian datos utilizando este formato, con el parametro extended: true permitimos analizar los datos complejos en la url como estos mismo enviados desde formularios html que contienen matrices o objetos anidados

        // Usar las rutas definidas
        this.app.use(this.routes);

        //Hacemos que la funcion asincronica se ejecute con el puerto actual
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
            
        });
    }
}
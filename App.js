const argv = require('./config/yargs').argv;
const { CrearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors/safe');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        CrearArchivo(argv.base, argv.limite)
            .then(Archivo => console.log(`Archivo creado:`, colors.green(Archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
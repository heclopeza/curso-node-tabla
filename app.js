const { crearArchivo, cerarArchivoPromise, crearArchivoAsync, cerarArchivoPromise2 } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//crearArchivo(10);
//console.log(process.argv);
//console.log(argv);
console.log('yargs base:', argv.b, argv.l);

/*const [, , arg3 = 'base=0'] = process.argv;
const [, base = 0] = arg3.split("=");*/

cerarArchivoPromise2(argv.base, argv.l, argv.h).
then(nombreArchivo => console.log(nombreArchivo, 'creado')).
catch(error => console.log(error));
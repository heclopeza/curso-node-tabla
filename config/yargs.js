const argv = require('yargs')
    .option('b', {
        alias: 'base',
        describe: 'base de calculo',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        describe: 'Listado de la tabla de multiplicar',
        type: 'boolean',
        demandOption: false,
        default: false
    })
    .option('h', {
        alias: 'hasta',
        describe: 'Límite multiplicado',
        type: 'number',
        demandOption: true //,
            //default: 1
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        } else return true;
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw 'El dato hasta debe ser un número';
        } else return true;
    })
    .argv;

module.exports = argv;
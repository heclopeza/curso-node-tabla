const fs = require('fs');
const colors = require('../config/colors');

const crearArchivo = (tabla) => {
    let salida = '';
    for (let cont = 1; cont <= 10; cont++) {
        //console.log(`${numero} x ${cont} = ${numero * cont}`);
        salida += `${tabla} x ${cont} = ${tabla * cont} \n`;
    }
    console.log(salida);
    /*
    fs.writeFile(`tabla-${tabla}.txt`, salida, (error) => {
        if (error) throw error;
        console.log(`Archivo creado: tabla-${tabla}.txt`);
    });
    */

    fs.writeFileSync(`tabla-${tabla}.txt`, salida);

    console.log(`Archivo creado: tabla-${tabla}.txt`);
};

const cerarArchivoPromise = (tabla) => {
    return new Promise((resolve, reject) => {
        let salida = '';
        for (let cont = 1; cont <= 10; cont++) {
            //console.log(`${numero} x ${cont} = ${numero * cont}`);
            salida += `${tabla} x ${cont} = ${tabla * cont} \n`;
        }
        console.log(salida);
        fs.writeFile(`tabla-${tabla}.txt`, salida, (error) => {
            if (error)
                reject(error);
            resolve(`tabla-${tabla}.txt`);
        });
    });
}

const cerarArchivoPromise2 = (tabla, listar, hasta) => {
    return new Promise((resolve, reject) => {
        try {
            let salida = '';
            for (let cont = 1; cont <= hasta; cont++) {
                //console.log(`${numero} x ${cont} = ${numero * cont}`);

                //salida += colors.white(tabla) + colors.yellow(' x ') + colors.white(cont) + colors.yellow(' = ') + colors.green((tabla * cont)) + '\n';
                salida += `${colors.white(tabla)} ${colors.yellow('x')} ${colors.white(cont)} ${colors.yellow('=')} ${colors.green((tabla * cont))}\n`;
            }
            if (listar)
                console.log(salida);
            colors.disable();
            fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);
            //resolve(`Archivo creado: tabla-${tabla}.txt`);
            resolve(`tabla-${tabla}.txt`);
        } catch (error) {
            reject(error);
        }
    });
}

const crearArchivoAsync = async(tabla) => {
    try {
        let salida = '';
        for (let cont = 1; cont <= 10; cont++) {
            //console.log(`${numero} x ${cont} = ${numero * cont}`);
            salida += `${tabla} x ${cont} = ${tabla * cont} \n`;
        }
        console.log(salida);
        /*
        fs.writeFile(`tabla-${tabla}.txt`, salida, (error) => {
            if (error) throw error;
            console.log(`Archivo creado: tabla-${tabla}.txt`);
        });
        */

        fs.writeFileSync(`tabla-${tabla}.txt`, salida);

        return `tabla-${tabla}.txt`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo,
    cerarArchivoPromise,
    crearArchivoAsync,
    cerarArchivoPromise2
}
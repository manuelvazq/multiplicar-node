//requireds
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
        for (let i = 1; i <= limite; i++) {
            let resp = base * i;
            console.log(`${base} * ${i} = ${resp}`);
        }

    }
    //--------------------------------------------------------------------------------------------------

let CrearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {

            let resp = base * i;
            data += `${base} * ${i} = ${resp}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla${base}.txt`);
        });

    });
}


module.exports = {
    CrearArchivo,
    listarTabla
}
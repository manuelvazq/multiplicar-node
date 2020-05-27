const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla', opts)
    .command('crear', 'Imprimir en consola la tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}
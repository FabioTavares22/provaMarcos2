const valide = require('../repositorios/latas.js')

if(descricao.lenght == 0){
    console.log("É obrigatorio informar uma descrição!")
}

if(volume.lenght <= 0){
    console.log("É obrigatorio informar um volume!")
}

module.exports = validacoes
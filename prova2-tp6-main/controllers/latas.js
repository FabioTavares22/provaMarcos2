const repositorio = require('../repositorios/latas.js')

//const valide = require('../validacoes/latas.js')

const controller = {
    get: (req, res) => {
        res.send(repositorio.get())
    },
    getId: (req, res) => {
        const {id} = req.params

        const lata = repositorio.getId(id)

        if(lata.length == 0){
            res.status(204).send("Não foram encontrados dados")
        }else{
            res.send(lata)
        }
    },
    create: (req, res) => {
        const dados = req.body
        if(!dados.descricao || dados.descricao.length == 0){
            return res.status(400).send("É obrigatorio informar uma descrição!")
        }
        
        if(!dados.volume || dados.volume.length <= 0){
            return res.status(400).send("É obrigatorio informar um volume!")
        }

        res.send(repositorio.create(dados))
    },
    update: (req, res) => {
        const dados = req.body
        const {id} = req.params
        dados.id = id

        return res.send(repositorio.update(dados))
    },
    destroy: (req, res) => {
        const {id} = req.params

        repositorio.destroy(id)
        res.send()
    }
}

module.exports = controller
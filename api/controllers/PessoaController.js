const dataBase = require('../models')

class PessoaController {
    
    static async obterLista(req, res) {

        try {
            const pessoas = await dataBase.Pessoas.findAll()

            return res.status(200).json(pessoas)

        } catch (error) {

            return res.status(500).json(error.message)
        }
    }

    static async obterUma(req, res) {
//        const id  = req.params.id
        const { id } = req.params
        
        try {
            const pessoa = await dataBase.Pessoas.findOne({
                where: { 
                    id: Number(id) 
                } 
            })

            if (pessoa == null) {

                return res.status(404).json()
            }

            return res.status(200).json(pessoa)

        } catch (error) {

            return res.status(500).json(error.message)
        }
    }

    static async criar(req, res) {
        const pessoa = req.body

        try {

            const novaPessoa = await dataBase.Pessoas.create(pessoa)
            
            return res.status(201).json(novaPessoa)

        } catch (error) {

            return res.status(500).json(error.message)
        }
    }

    static async atualizar(req ,res) {

        const { id } = req.params
        const outraPessoa = req.body

        try {
            
            const atualizou = await dataBase.Pessoas.update(outraPessoa,
            {
                where: {
                    id: Number(id)
                }
            })

            if (atualizou == 0) {

                return res.status(404).json()
            }

            return res.status(204).json()

        } catch (error) {

            return res.status(500).json(error.message)
        }
    }

    static async remover(req, res) {

        const { id } = req.params

        const deletou = await dataBase.Pessoas.destroy({
            where: {
                id: Number(id)
            }
        })

        if (deletou == 0) {
            return res.status(404).json()
        }

        return res.status(204).json()
    }
}

module.exports = PessoaController
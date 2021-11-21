const dataBase = require('../models')
const pessoaView = require('../dto/pessoa-view')

class PessoaController {
    
    static async obterLista(req, res) {

        try {
            const pessoas = await dataBase.Pessoas.findAll({
                attributes: [ 'id', 'nome', 'ativo', 'email' ]
            })

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

            return res.status(200).json(pessoaView(pessoa))

        } catch (error) {

            return res.status(500).json(error.message)
        }
    }

    static async criar(req, res) {
        const pessoa = req.body

        try {

            const novaPessoa = await dataBase.Pessoas.create(pessoa)
            
            return res.status(201).json(pessoaView(novaPessoa))

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

        try {
            const deletou = await dataBase.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            })
    
            if (deletou == 0) {
                return res.status(404).json()
            }
    
            return res.status(204).json()
            
        } catch (error) {

            return res.status(500).json(error.message)
        }
    }

    static async obterUmaMatricula(req, res) {

        const { matriculaId, estudanteId } = req.params;

        try {

            const matricula = await dataBase.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });

            if (matricula == null) {

                return res.status(404).json();
            }

            return res.status(200).json(matricula);

        } catch (error) {

            return res.status(500).json(error.message);

        }
    }

    static async criarMatricula(req, res) {

        const { estudanteId } = req.params;
        const matricula = { ...req.body, estudante_id: Number(estudanteId) };

        try {

            const novaMatricula = await dataBase.Matriculas.create(matricula);

            return res.status(201).json(novaMatricula);

        } catch(error) {

            return res.status(500).json(error.message);
        }
    }

    static async atualizarMatricula(req, res) {

        const { estudanteId, matriculaId } = req.params;
        const matricula = req.body;

        try {

            const atualizou = await dataBase.Matriculas.update(matricula, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            if (atualizou == 0) {

                return res.status(404).json();
            }

            const matriculaAtualizada = await dataBase.Matriculas.findOne({
                where: {
                    id: Number(matriculaId)
                }
            });

            return res.status(200).json(matriculaAtualizada);

        } catch (error) {

            return res.status(500).json(error.message);

        }
    }

    static async removerMatricula(req, res) {

        const { estudanteId, matriculaId } = req.params;

        try {

            const deletou = await dataBase.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });

            if (deletou == 0) {

                return res.status(404).json();
            }

            return res.status(204).json();

        } catch (error) {

            return res.status(500).json(error.message);

        }
    }
}

module.exports = PessoaController
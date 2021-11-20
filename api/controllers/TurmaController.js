const dataBase = require('../models');

class TurmaController {

    static async obterTodos(req, res) {

        try {

            const turmas = await dataBase.Turmas.findAll();

            return res.status(200).json(turmas);

        } catch(error) {

            return res.status(500).json(error.message);

        }
    }

    static async obterUm(req, res) {

        const { id } = req.params;

        try {

            const turma = await dataBase.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });

            if (turma == null) {

                return res.status(404).json();

            }

            return res.status(200).json(turma);

        } catch(error) {

            return res.status(500).json();

        }
    }

    static async criar(req, res) {

        const turma = req.body;

        try {

            const novaTurma = await dataBase.Turmas.create(turma);

            return res.status(201).json(novaTurma);

        } catch (error) {

            return res.status(500).json(error.message);
        }
    }

    static async alterar(req, res) {

        const { id } = req.params;
        const turma = req.body;

        try {

            const alterou = await dataBase.Turmas.update(turma, {
                where: {
                    id: Number(id)
                }
            });

            if (alterou == 0) {

                return res.status(404).json();
            }

            return res.status(200).json(
                await dataBase.Turmas.findOne({ 
                    where: { id: Number(id) } 
                })
            );

        } catch (error) {

            return res.status(500).json(error.message);
        }
    }

    static async remover(req, res) {

        const { id } = req.params;

        try {

            const deletou = await dataBase.Turmas.destroy({
                where: {
                    id: Number(id)
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

module.exports = TurmaController;
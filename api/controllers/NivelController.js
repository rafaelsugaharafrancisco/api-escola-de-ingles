const dataBase = require('../models');

class NivelController {

    static async obterTodos(req, res) {

        try {

            const niveis = await dataBase.Niveis.findAll();

            return res.status(200).json(niveis);

        }catch (error) {

            return res.status(500).json(error.message);
        }
    }

    static async obterUm(req, res) {

        const { id } = req.params;

        try {

            const nivel = await dataBase.Niveis.findOne({ 
                where: {
                    id: Number(id)
                }
            });

            if (nivel == null) {

                return res.status(404).json();
            }

            return res.status(200).json(nivel);

        } catch(error) {

            return res.status(500).json(error.message);
        }
    }

    static async criar(req, res) {

        const nivel = req.body;

        try {

            const novoNivel = await dataBase.Niveis.create(nivel);

            return res.status(201).json(novoNivel);

        } catch(error) {

            return res.status(500).json(error.message);
        }
    }

    static async alterar(req, res) {

        const nivel = req.body;
        const { id } = req.params;

        try {

            const atualizou = await dataBase.Niveis.update(nivel, {
                where: {
                    id: Number(id)
                }
            });

            if (atualizou == 0) {

                return res.status(404).json();
            }

            const nivelAtualizado = await dataBase.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json(nivelAtualizado);

        } catch (error) {

            return res.status(500).json(error.message);
        }
    }

    static async remover(req, res) {

        const { id } = req.params;

        try {

            const removeu = await dataBase.Niveis.destroy({
                where: {
                    id: Number(id)
                }
            })

            if (removeu == 0) {

                return res.status(404).json();

            }

            return res.status(204).json();

        } catch(error) {

            return res.status(500).json();
        }
    }
}

module.exports = NivelController;
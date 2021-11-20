const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', NivelController.obterTodos)
    .get('/niveis/:id', NivelController.obterUm)
    .post('/niveis', NivelController.criar)
    .put('/niveis/:id', NivelController.alterar)
    .delete('/niveis/:id', NivelController.remover);

module.exports = router;
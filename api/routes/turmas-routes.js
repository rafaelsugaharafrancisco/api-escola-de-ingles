const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turmas', TurmaController.obterTodos)
    .get('/turmas/:id', TurmaController.obterUm)
    .post('/turmas', TurmaController.criar)
    .put('/turmas/:id', TurmaController.alterar)
    .delete('/turmas/:id', TurmaController.remover);

module.exports = router;
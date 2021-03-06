const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.obterLista)
router.get('/pessoas/:id', PessoaController.obterUma)
router.post('/pessoas', PessoaController.criar)
router.put('/pessoas/:id', PessoaController.atualizar)
router.delete('/pessoas/:id', PessoaController.remover)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.obterUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.removerMatricula)

module.exports = router
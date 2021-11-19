const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.obterLista)
router.get('/pessoas/:id', PessoaController.obterUma)
router.post('/pessoas', PessoaController.criar)
router.put('/pessoas/:id', PessoaController.atualizar)

module.exports = router
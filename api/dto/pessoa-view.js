const formatarData = require('../config/formatar-data')

module.exports = (pessoa) => {

    const dataCriacao = formatarData(pessoa.createdAt)
    const dataAtualizacao = formatarData(pessoa.updatedAt)

    return {
        id: pessoa.id,
        nome: pessoa.nome,
        ativo: pessoa.ativo,
        email: pessoa.email,
        createdAt: dataCriacao,
        updatedAt: dataAtualizacao
    }
}
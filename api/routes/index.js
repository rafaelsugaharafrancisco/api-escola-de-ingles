const bodyParser = require('body-parser')
const pessoasRoutes = require('./pessoas-routes')
const niveisRoutes = require('./niveis-routes')
const turmasRoutes = require('./turmas-routes')

module.exports = app => {
    app.use(bodyParser.json(), pessoasRoutes, niveisRoutes, turmasRoutes)
}

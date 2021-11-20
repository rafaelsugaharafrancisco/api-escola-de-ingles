const bodyParser = require('body-parser')
const pessoasRoutes = require('./pessoas-routes')
const niveisRoutes = require('./niveis-routes')

module.exports = app => {
    app.use(bodyParser.json(), pessoasRoutes, niveisRoutes)
}

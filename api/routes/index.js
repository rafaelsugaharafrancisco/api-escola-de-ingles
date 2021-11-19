const bodyParser = require('body-parser')
const pessoasRoutes = require('./pessoas-routes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoasRoutes)
}

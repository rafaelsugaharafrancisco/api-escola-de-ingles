const moment = require('moment')
require('dotenv/config')

function formataData(data) {
    const dataFormatada = moment
    .tz(data, process.env.TIME_ZONE)
    .format( "YYYY-MM-DDThh:mm:ss")

    return dataFormatada
}

module.exports = formataData
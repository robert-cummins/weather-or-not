const path = require('path')
const express = require('express')
const weather = require('./routes/weatherApi')

// const cors = require('cors')

const server = express()

server.use('/v1/activities')
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/weather', weather)

module.exports = server

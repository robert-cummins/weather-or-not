const path = require('path')
const express = require('express')
const weather = require('./routes/weatherApi')
const activities = require('./routes/activities')

// const cors = require('cors')

const server = express()

server.use('/v1/activities', activities)
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/weather', weather)

module.exports = server

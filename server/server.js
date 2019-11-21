const path = require('path')
const express = require('express')

const server = express()

server.use('/v1/activities')
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

const path = require('path')
const express = require('express')

const server = express()
const trainers = require('./routes/trainers')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('api/v1/trainers', trainers)

module.exports = server

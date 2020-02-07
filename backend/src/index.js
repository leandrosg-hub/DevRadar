const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) //pegar o link de conexão do banco de dados no mongoDB (assistir backend após 39min)

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)
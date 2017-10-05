const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../db/db');
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
require('../db/model/dataModel')
const route = require('../server/router/routes')

const PORT = 3000;

const app = express()
app.use(parser.json())
app.use(parser.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use('/api', route)
app.use(express.static(path.resolve(__dirname, '../client/static')))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/static', 'index.html'));
})

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`)
// })

server.listen(PORT, () => console.log('listening on port ' + PORT));
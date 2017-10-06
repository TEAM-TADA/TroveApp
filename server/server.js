const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../db/db');
const http = require('http');
const socketIo = require('socket.io');
require('../db/model/dataModel')

const route = require('../server/router/routes')
const PORT = 3000;

<<<<<<< HEAD
const app = express()
const server = http.createServer(app);
const io = socketIo(server);
=======
const redis = require('redis')

const app = express();
const client = redis.createClient(); 

>>>>>>> Set up redis and ig controller.
app.use(parser.json())
app.use(parser.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use('/api', route)
app.use(express.static(path.resolve(__dirname, '../client/static')))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/static', 'index.html'));
})

<<<<<<< HEAD
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`)
// })
io.on('connection', socket => {
  socket.on('message', message => {
    console.log('server received message ');
    socket.broadcast.emit('message', {
      text: message.text,
      // from: socket.id.slice(8)
      from: message.from,
    })
  })
})
server.listen(PORT, () => console.log('listening on port ' + PORT));
=======
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = client; 
>>>>>>> Set up redis and ig controller.

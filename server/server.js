const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../db/db');
const http = require('http');
const socketIo = require('socket.io');
const cors = require ('cors');

require('../db/model/dataModel')

const route = require('../server/router/routes')
const PORT = 3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// const redis = require('redis')
// const client = redis.createClient(); 

app.use(parser.json())
app.use(parser.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(cors())
app.use('/api', route)
app.use(express.static(path.resolve(__dirname, '../client/static')))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/static', 'index.html'));
})

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`)
// })
io.on('connection', socket => {
  socket.on('message', message => {
    console.log('server received message ', io.engine.clientsCount);
    console.log('this is the message room', message);
    socket.broadcast.to(message.room.toString()).emit('message', {
      text: message.text,
      // from: socket.id.slice(8)
      from: message.from,
    })
  })
  socket.on('subscribe', function(room) {
    console.log('joining room', room);
    socket.join(room);
  })
  console.log('user connected', io.engine.clientsCount)
})

io.on('disconnect', socket => {
  console.log('user disconnected', io.engine.clientsCount);
})


server.listen(PORT, () => console.log('listening on port ' + PORT));
  console.log(`Listening on port ${PORT}`)
})

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`)
// })

// module.exports = client; 

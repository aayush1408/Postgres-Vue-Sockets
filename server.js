const express = require('express');
const socket = require('socket.io');
const app = express();
const { Client } = require('pg')
var conString = "postgres://test:test@localhost:5432/test";

var client = new Client(conString);

app.use(express.static('index.html'));
const server = app.listen('4000',()=>{
    console.log('Server running at 4000');
});

const io = socket(server);
app.get('/rows/:id',(req,res)=>{
  client.query(`SELECT * FROM blocks WHERE block_number=${req.params.id}`)
  .then((result)=>{
    res.send(result.rows[0])
  })
})
io.on('connection',(socket)=>{
  client.connect().then(()=>{
    console.log('Connected');
  });
  setInterval(()=>{
  client.query('SELECT * FROM blocks ORDER BY block_number DESC LIMIT 10').then((result)=>{
    socket.emit('update',result.rows);          
    console.log(result.rows);
  }).catch((err)=>{
    console.log(err);
  });
  },1000);  
});
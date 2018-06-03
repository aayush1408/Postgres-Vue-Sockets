const express = require('express');
const socket = require('socket.io');
const app = express();
const { Client } = require('pg')
var conString = "postgres://test:test@localhost:5432/test";

var client = new Client(conString);

// client.connect();
// client.connect().then(()=>{
//   console.log('Connected');
//   const sql = 'INSERT INTO test (color) VALUES ($1)';
//   const params = ['orange'];
//   return client.query(sql,params);
// }).then((result)=>{
//   console.log(result);
// }).
// catch(e => console.error('connection error', e.stack))


app.use(express.static('index.html'));
const server = app.listen('4000',()=>{
    console.log('Server running at 4000');
});

const io = socket(server);

io.on('connection',(socket)=>{
  client.connect().then(()=>{
    console.log('Connected');
  });
  setInterval(()=>{
  client.query('SELECT * FROM test ORDER BY equip_id DESC LIMIT 10').then((result)=>{
    socket.emit('update',result.rows);          
    console.log(result.rows);
  }).catch((err)=>{
    console.log(err);
  });
  },1000);  
});
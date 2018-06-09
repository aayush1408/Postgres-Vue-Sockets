const express = require('express');
const socket = require('socket.io');
const app = express();
const cors = require('cors');

//Pg configurations:
// const { Client } = require('pg')
// var conString = "postgres://test:test@localhost:5432/test";
// var client = new Client(conString);


//Sequelize configurations
const Sequelize = require('sequelize');
const connection = new Sequelize('test','test','test',{
  host: 'localhost',
  dialect:'postgres'
});

//Defining the schema and model
var Block = connection.define('blocks',{
block_number:Sequelize.NUMERIC,
block_hash:Sequelize.STRING,
parent_hash:Sequelize.STRING,
difficulty:Sequelize.NUMERIC,
gas_used:Sequelize.NUMERIC,
miner:Sequelize.NUMERIC,
timestamp:Sequelize.DATE,
sha3uncles:Sequelize.STRING,
extra_data:Sequelize.STRING,
gas_limit:Sequelize.NUMERIC,
uncle_count:Sequelize.NUMERIC,
transaction_count:Sequelize.NUMERIC
});

//Handling cors
app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.static('index.html'));

//server listen
const server = app.listen('4000',()=>{
    console.log('Server running at 4000');
});

const io = socket(server);

//handling the routes
app.get('/rows/:id',(req,res)=>{
  connection.query(`SELECT * FROM blocks WHERE block_number=${req.params.id}`)  
  .then((result)=>{
    console.log(result);
    res.send(result[0])
  });
});

//handling socket operations
io.on('connection',(socket)=>{
  
  // client.connect().then(()=>{
  //   console.log('Connected');
  // });

  setInterval(()=>{
    connection.query("SELECT * FROM blocks ORDER BY block_number DESC LIMIT 10")
    .then(result => {
      socket.emit('update',result[0]);
    }).catch((err)=>{
    console.log(err);
  });
  },1000);  
});
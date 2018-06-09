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
transaction_count:Sequelize.NUMERIC,
},
{
  timestamps:false
  });

//Remove primary key
Block.removeAttribute('id');

//Defining the schema and model of transaction
var Transaction = connection.define('transactions',{
  transaction_hash:Sequelize.STRING,
  block_number:Sequelize.NUMERIC,
  nonce:Sequelize.NUMERIC,
  sender:Sequelize.STRING,
  receiver:Sequelize.STRING,
  start_gas:Sequelize.NUMERIC,
  value:Sequelize.NUMERIC,
  data:Sequelize.STRING,
  gas_price:Sequelize.NUMERIC,
  timestamp:Sequelize.DATE,
  transaction_index:Sequelize.NUMERIC,
  },
  {
    timestamps:false
  });
  
  //Remove primary key
  Transaction.removeAttribute('id');
  
//Handling cors
app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.static('index.html'));

//server listen
const server = app.listen('4000',()=>{
    console.log('Server running at 4000');
});

const io = socket(server);

//handling the routes
app.get('/block/:id',(req,res)=>{
  Block.findOne({ where: {block_number:req.params.id}})
  .then((result)=>{
    res.send(result.dataValues)
  });
});

app.get('/transaction/:id',(req,res)=>{
  Transaction.findOne({ where: {block_number:req.params.id}})
  .then((result)=>{
    res.send(result.dataValues)
  });
});

//handling socket operations
io.on('connection',(socket)=>{
  setInterval(()=>{
    Block.findAll({
      order: [ [ 'block_number', 'DESC' ]],
      limit: 10,
    })
    .then(result => {
      console.log(result);
      socket.emit('blocks',result);
    }).catch((err)=>{
    console.log(err);
  });
  Transaction.findAll({
    order: [ [ 'block_number', 'DESC' ]],
    limit: 10,
  })
  .then(result => {
    console.log(result);
    socket.emit('transactions',result);
  }).catch((err)=>{
  console.log(err);
});
  
  },1000);  
});
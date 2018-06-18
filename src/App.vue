<template>
  <div id="app" class="">
    <!-- navabar -->
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Matic Network</span>
    </nav>
    <!-- body part of the page -->
    <div  class="container">
    <div class="row">
      <!-- contains the block and transactions -->
      <div class="col-lg-6 col-md-12 col-sm-12" id="block">
        <div class="list-group">       
          <div class="list-group-item" v-for="block in blocks" :key="block.block_number">
            <router-link v-bind:to="'/block/'+block.block_number">
              <ul id="block-list">
              <li id="block-number"><span id="inside-box">Block {{block.block_number}}</span></li>
              <li id="block-hash">Block-hash {{block.block_hash}}</li>
              <li>Miner{{block.miner}}</li>      
              <li>TimeStamp {{block.timestamp}}</li>
              </ul>          
            </router-link>
          </div>
        </div>   
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12" id="transaction">
        <div class="list-group">
          <div class="list-group-item" v-for="transaction in transactions" :key="transaction.block_number">            
            <router-link v-bind:to="'/transaction/'+transaction.block_number">
              <ul id="list-transactions">
              <li id="transaction-hash"><span class="transaction-details" id="transaction-hash">TransactionHash</span> {{transaction.transaction_hash}}</li>
              <li><span class="transaction-details">Sender {{transaction.sender}}</span></li>
              <li><span class="transaction-details">Reciever {{transaction.receiver}}</span></li>
              </ul>
            </router-link>
          </div> 
        </div>  
      </div>      
    </div>
   </div>
  </div>
</template>

<script>
import socketIOClient from "socket.io-client";
import axios from 'axios';

export default {
  name: 'App',
  data(){
    return{
      blocks:[],
      transactions:[]
    }
  },
  mounted(){
    const socket = socketIOClient('http://localhost:4000');
    socket.on('blocks',(data)=>{
      this.blocks = [...data];
      console.log(this.blocks);
    });
    socket.on('transactions',(data)=>{
      this.transactions = [...data];
      console.log(this.transactions);
    })
  },

}
</script>
<style>
#block,#transaction{
 display:block; 
 width:200px;
 height:500px;
 overflow-y:scroll;
 overflow-x:hidden;
 border-spacing: 200px;
}
#block-number{
  display:block;
  height:50px;
  width:120px;
  float:left;
  background-color:darkgray;
  color:white;
}
#list-transactions{
  list-style: none;
  color:grey;
  font-family: 'Times New Roman', Times, serif;
}
#block-list{
  color:grey;
  font-family: 'Times New Roman', Times, serif;
  list-style: none;
  
}
#block-hash{
  overflow: hidden;
}
#transaction-hash{
  overflow: hidden;
}
.row{
  margin-top: 10px;
}
.list-group{
  margin-left: -30px;
}
.list-group-item{
  display: inline;
}
#transaction-hash{
  /* display: block; */
  float: left;
}


#transaction::-webkit-scrollbar {
    width: 3px;
    background-color: #F5F5F5;
} 
#block::-webkit-scrollbar {
    width: 3px;
    background-color: #F5F5F5;
} 
#block::-webkit-scrollbar-thumb {
    background-color:darkgray;
}
#transaction::-webkit-scrollbar-thumb {
    background-color:darkgray;
}
</style>




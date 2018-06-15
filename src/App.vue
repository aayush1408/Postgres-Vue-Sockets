<template>
  <div id="app">
    <!-- navabar -->
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Matic Network</span>
    </nav>
    <div  class="container">
    <div class="row">
      <div class="col-lg-6" id="block" style=" display:block; width:500px; height:500px;overflow-y:scroll;overflow-x:hidden;">
        <div class="list-group" v-for="block in blocks" :key="block.block_number">       
          <div class="list-group-item" style="display:block;heigth:100px;">
          <router-link v-bind:to="'/block/'+block.block_number">
          <ul>
          <li>Block-no {{block.block_number}}</li>
          <li>Block-hash {{block.block_hash}}</li>
          <li>Mined by {{block.miner}}</li>      
          <li>TimeStamp {{block.timestamp}}</li>
          </ul>
          </router-link>
          </div>
        </div>   
      </div>
      <div class="col-lg-6" id="transaction" style=" display:block; width:300px; height:500px;overflow-y:scroll;overflow-x:hidden;" >
        <div class="list-group" v-for="transaction in transactions" :key="transaction.block_number">
        <div class="list-group-item" style="display:block;heigth:100px;">            
          <router-link v-bind:to="'/transaction/'+transaction.block_number">
          <ul>
          <li>TransactionHash {{transaction.transaction_hash}}</li>
          <li>Sender  {{transaction.sender}}</li>
          <li>Reciever {{transaction.receiver}}</li>
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
li{
  overflow: hidden;
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
    background-color: #000000;
}
#transaction::-webkit-scrollbar-thumb {
    background-color: #000000;
}
</style>




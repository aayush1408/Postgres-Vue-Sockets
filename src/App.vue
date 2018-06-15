<template>
  <div id="app" class="row">
    <div class="col-lg-6">
      <ul class="list-group" v-for="block in blocks" :key="block.block_number">       
        <li class="list-group-item">
        <router-link v-bind:to="'/block/'+block.block_number">
        Block-no {{block.block_number}}
        Block-hash {{block.block_hash}}
        Mined by {{block.miner}}      
        TimeStamp {{block.timestamp}}
        </router-link>
        </li>
      </ul>   
    </div>
    <div class="col-lg-6">
      <ul class="list-group" v-for="transaction in transactions" :key="transaction.block_number">
      <li class="list-group-item">            
        <router-link v-bind:to="'/transaction/'+transaction.block_number">
        TransactionHash {{transaction.transaction_hash}}
        Sender  {{transaction.sender}}
        Reciever {{transaction.receiver}}
        <!-- Data  {{transaction.data}} -->
       </router-link>
       </li> 
      </ul>  
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




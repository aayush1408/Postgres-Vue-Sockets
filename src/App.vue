<template>
  <div id="app">
    <table>
      <thead>
      <tr>
        <th>Block-NO</th>
        <th>BLOCK-HASH</th>
        <th>MINED BY</th>
        <th>TIMESTAMP</th>     
      </tr>
      </thead>
      <tbody v-for="block in blocks" :key="block.block_number">
      <tr>            
        <td>{{block.block_number}}</td> 
        <td>{{block.block_hash}}</td>
        <td>{{block.miner}}</td>      
        <td>{{block.timestamp}}</td>
        <td><router-link v-bind:to="'/block/'+block.block_number">View</router-link></td>
      </tr>        
      </tbody>
    </table>   
     <table>
      <thead>
      <tr>
        <th>TRANSACTION</th>
        <th>SENDER</th>
        <th>TO</th>
        <!-- <th>Amount</th>      -->
      </tr>
      </thead>
      <tbody v-for="transaction in transactions" :key="transaction.block_number">
      <tr>            
        <td>{{transaction.transaction_hash}}</td> 
        <td>{{transaction.sender}}</td>
        <td>{{transaction.receiver  }}</td>      
        <!-- <td>{{transaction.data}}</td> -->
        <td><router-link v-bind:to="'/transaction/'+transaction.block_number">View</router-link></td>
      </tr>        
      </tbody>
    </table>   
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




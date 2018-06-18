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
          <h5 class="list-group-item"><i class="fa fa-cubes"></i> Blocks</h5>     
          <div class="list-group-item" v-for="block in blocks" :key="block.block_number">
            <router-link v-bind:to="'/block/'+block.block_number">
              <ul id="block-list">
              <li id="block-number"><span id="inside-box">Block {{block.block_number}}</span></li>
              <div id="other-block-details">
              <li id="block-hash"><span class="block-headers">Block-hash:</span> {{block.block_hash.substring(0,16)}}...</li>
              <li><span class="block-headers">Miner: </span> {{block.miner.substring(0,16)}}</li>      
              <li><span class="block-headers">Time: </span> {{block.timestamp}}</li>
              </div>
              </ul>          
            </router-link>
          </div>
        </div>   
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12" id="transaction">
        <div class="list-group">
          <h5 class="list-group-item"><i class="fa fa-list-alt "></i> Transactions</h5>               
          <div class="list-group-item" v-for="transaction in transactions" :key="transaction.block_number">            
            <router-link v-bind:to="'/transaction/'+transaction.block_number">
              <ul id="list-transactions">
              <li id="transaction-hash"><span class="transaction-headers">Hash:  </span> {{transaction.transaction_hash.substring(0,16)}}...</li>
              <li><span class="transaction-headers">From: </span> {{transaction.sender.substring(0,4)}}...<span class="transaction-headers">To: </span>{{transaction.receiver}}..</li>
              <li><span class="transaction-headers">Amount: </span> {{ transaction.value }} ETH</li>
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
 width:10px;
 height:500px;
 overflow-y:scroll;
 border-spacing: 200px;
}

#block-number{
  display:block;
  height:60px;
  width:120px;
  float:left;
  background-color:gray;
  color:white;
  font-size: 18px;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  border-radius: 1.5px;
  margin-right:18px;
  margin-top:4px; 
  padding:4px; 
}
#list-transactions{
  list-style: none;
  color:grey;
  font-family: 'Times New Roman', Times, serif;
  display: block;    
  height: 60px;
}
#block-list{
  color:grey;
  font-family: 'Times New Roman', Times, serif;
  list-style: none;
  display: block;
  height: 60px;
}
.row{
  margin-top: 10px;
}

#inside-box{
  display: inline-block;
  padding-top:12px;
}
li:hover{
  list-style: none;
}
h5{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: gray;
}
li{
  font-size: 15px;
  padding: 2px;
}
.transaction-headers,.block-headers{
  font-style:bold;
  font-family:Arial, Helvetica, sans-serif;
  color:gray;
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




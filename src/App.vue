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
      <tbody v-for="row in response">
      <tr>
        <td>{{row.block_number}}</td> 
        <td>{{row.block_hash}}</td>
        <td>{{row.miner}}</td>      
        <td>{{row.timestamp}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import socketIOClient from "socket.io-client";


export default {
  name: 'App',
  data(){
    return{
      response:[]
    }
  },
  mounted(){
    const socket = socketIOClient('http://localhost:4000');
    socket.on('update',(data)=>{
      this.response = data;
    });
  }
}
</script>

<style>

</style>

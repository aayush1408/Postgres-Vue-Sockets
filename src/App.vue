<template>
  <div id="app">
    <table>
      <thead>
      <tr>
        <th>Equip_id</th>
        <th>Color</th>
      </tr>
      </thead>
      <tbody v-for="row in response">
      <tr>
        <td>{{row.equip_id}}</td> 
        <td>{{row.color}}</td>
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

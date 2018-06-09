<template>
  <div>
    <div class="title">
      <ul>
          <li>Block Number {{obj.block_number}}</li>
          <li>Block Hash {{obj.block_hash}}</li>  
          <li>Difficulty {{obj.difficulty}}</li>
          <li>Extra-Data {{obj.extra_data}}</li>          
          <li>Gas-Limit {{obj.gas_limit}}</li>          
          <li>Gas-Used {{obj.gas_used}}</li>
          <li>Parent-Hash{{obj.parent_hash}}</li>          
          <li>Miner {{obj.miner}}</li>          
          <li>Sha3Uncle {{obj.sha3uncles}}</li>                  
          <li>TimeStamp{{obj.timestamp}}</li>          
          <li>Transaction-Count {{obj.transaction_count}}</li>          
          <li>Uncle-Count {{obj.uncle_count}}</li>                              
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'block',
    data () {
      return {
        obj:{}
      }
    },
  created() {
    axios.get(`http://localhost:4000/block/${this.$route.params.id}`)
    .then(response => {
        this.obj = {...response.data};
         console.log(this.obj);
    })
    .catch(error => {
      console.log(error);
    });
  },
  }
</script>
<style>

table
{
    table-layout: fixed;
    width: 100px;
}
</style>


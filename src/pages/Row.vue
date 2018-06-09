<template>
  <div>
    <div class="title">
      <ul>
          <li>Block Number {{obj[0].block_number}}</li>
          <li>Block Hash {{obj[0].block_hash}}</li>  
          <li>Difficulty {{obj[0].difficulty}}</li>
          <li>Extra-Data {{obj[0].extra_data}}</li>          
          <li>Gas-Limit {{obj[0].gas_limit}}</li>          
          <li>Gas-Used {{obj[0].gas_used}}</li>
          <li>Parent-Hash{{obj[0].parent_hash}}</li>          
          <li>Miner {{obj[0].miner}}</li>          
          <li>Sha3Uncle {{obj[0].sha3uncles}}</li>                  
          <li>TimeStamp{{obj[0].timestamp}}</li>          
          <li>Transaction-Count {{obj[0].transaction_count}}</li>          
          <li>Uncle-Count {{obj[0].uncle_count}}</li>                              
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Row',
        obj:[]
      }
    },
  created() {
    axios.get(`http://localhost:4000/rows/${this.$route.params.id}`)
    .then(response => {
        this.obj = [...response.data];
         console.log(this.obj);
    })
    .catch(error => {
      console.log(error);
    });
  },
  }
</script>
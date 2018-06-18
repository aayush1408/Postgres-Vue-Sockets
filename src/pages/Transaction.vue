<template>
  <div>
    <div class="title">
      <ul>
          <li>Block Number {{obj.block_number}}</li>
          <li>Transaction {{obj.transaction_hash}}</li>  
          <li>Nonce {{obj.nonce}}</li>
          <li>Sender {{obj.sender}}</li>          
          <li>Receiver {{obj.receiver}}</li>          
          <li>Gas-Start {{obj.gas_used}}</li>
          <li>Value {{obj.value}}</li>          
          <li>Data {{obj.data}}</li>          
          <li>Gas Price {{obj.gas_price}}</li>                  
          <li>TimeStamp{{obj.timestamp}}</li>          
          <li>Transaction-Index {{obj.transaction_index}}</li>                                   
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'transaction',
    data () {
      return {
        obj:{}
      }
    },
  created() {
    axios.get(`http://localhost:4000/transaction/${this.$route.params.id}`)
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


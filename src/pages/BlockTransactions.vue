<template>
  <div id="transactions-page" class="container">
    <h4>
      <!-- Transaction for block: {{transactions[0].block_number}}       -->
    </h4>
    <p>A total of {{transactions.length}} transactions found</p>
      <table class="table table-responsive">
       <thead>
        <tr>
          <th scope="col" width="300px">TxHash</th>
          <th scope="col">Block</th>
          <th scope="col" width="150px">Age</th>
          <th scope="col" width="200px">From</th>
          <th scope="col" width="200px">To</th>
          <th scope="col" width="140px">Value</th>
          <th scope="col">Tx-Fee</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="transaction in transactions" :key="transaction.transaction_hash">
            <td>{{transaction.transaction_hash.substring(0,16)}}..</td>
            <td>{{transaction.block_number}}</td>
            <td>{{transaction.timestamp | moment("from", "now") }}</td>
            <td>{{transaction.sender.substring(0,16)}}..</td>
            <td>{{transaction.receiver.substring(0,16)}}..</td>
            <td>{{transaction.value}} ETH</td>
            <td>{{transaction.gas_price}}</td>
        </tr>
      </tbody>
      </table>
    </div>

</template>

<script>
  import axios from 'axios';
  export default {
    name: 'transaction',
    data () {
      return {
        transactions:[]
      }
    },
  created() {
    axios.get(`http://localhost:4000/block/transactions/${this.$route.params.id}`)
    .then(response => {
        this.transactions = response.data;
         console.log(this.transactions);
    })
    .catch(error => {
      console.log(error);
    });
  },
  }
</script>

<style>
table{
  margin-top: 5px;
}
th{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 16px;
  color:grey;
}
h4{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color:grey;
  margin-top: 8px;
}
td{
  font-family: 'Times New Roman', Times, serif;
  letter-spacing: 0.7px;
  color: black;
}
p{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color:grey;
  margin-top: 2px;
}
#transactions-page{
  margin-top:10px;
}
</style>

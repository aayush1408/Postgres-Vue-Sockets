<template>
  <div id="transactions-page" class="container">
    <h4>Transaction Information</h4>    
      <table class="table table-responsive">
        <tr>
          <td width="390">&nbsp;&nbsp;Block Number:
          </td>
          <td>
            {{obj.block_number}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Transaction Hash:
          </td>
          <td>
            {{obj.transaction_hash}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Nonce:
          </td>
          <td>
            {{obj.nonce}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Sender:
          </td>
          <td>
            {{obj.sender}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Receiver:
          </td>
          <td>
            {{obj.receiver}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Gas Used:
          </td>
          <td>
            {{obj.gas_used}}
          </td>
        </tr>
         <tr>
          <td width="190">&nbsp;&nbsp;Value:
          </td>
          <td>
            {{obj.value}}
          </td>
        </tr>
         <tr>
          <td width="390">&nbsp;&nbsp;Data
          </td>
          <td>
            {{obj.data.substring(0,64)}}
          </td>
        </tr>
          <tr>
          <td width="390">&nbsp;&nbsp;Gas Price:
          </td>
          <td>
            {{obj.gas_price}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Timestamp:
          </td>
          <td>
            {{obj.timestamp}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Transaction-Index:
          </td>
          <td>
            {{obj.transaction_index}}
          </td>
        </tr>
      </table>
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

<style>
table{
   font-size: 15px;
   margin-top: 6px;
}
h4{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 26px;
  color:gray;
  margin-top: 8px;  
  font-weight: bold;
}
td{
  font-family: 'Times New Roman', Times, serif;
  letter-spacing: 0.6px;
  color: black;
}
</style>

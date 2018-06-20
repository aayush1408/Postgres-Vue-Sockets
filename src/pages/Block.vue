<template>
  <div id="blocks-page" class="container">
      <table class="table">
        <thead>
          <tr><th>Block Information</th></tr>
        </thead>
        <tbody>
        <tr>
          <td width="390">&nbsp;&nbsp;Block Number:
          </td>
          <td>
            {{obj.block_number}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Block Hash:
          </td>
          <td>
            {{obj.block_hash}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Difficulty:
          </td>
          <td>
            {{obj.difficulty}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Extra-Data:
          </td>
          <td>
            {{obj.extra_data}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Gas-Limit:
          </td>
          <td>
            {{obj.gas_limit}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;Parent Hash:
          </td>
          <td>
            {{obj.parent_hash}}
          </td>
        </tr>
         <tr>
          <td width="390">&nbsp;&nbsp;Miner:
          </td>
          <td>
            {{obj.miner}}
          </td>
        </tr>
         <tr>
          <td width="390">&nbsp;&nbsp;sha3Uncles
          </td>
          <td>
            {{obj.sha3uncles}}
          </td>
        </tr>
        <tr>
          <td width="390">&nbsp;&nbsp;TimeStamp
          </td>
          <td>
            {{obj.timestamp}}
          </td>
        </tr>
           <tr>
          <td width="390">&nbsp;&nbsp;Transaction Count
          </td>
          <td>
            {{obj.transaction_count}}
          </td>
        </tr>
          <tr>
          <td width="390">&nbsp;&nbsp;Uncle Count
          </td>
          <td>
            {{obj.uncle_count}}
          </td>
        </tr>
        </tbody>
      </table>                             
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
table{
  font-size: 15px;
}
th{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 22px;
  color:gray;
}
td{
  font-family: 'Times New Roman', Times, serif;
  letter-spacing: 0.6px;
  color: black;
}
</style>


<template>
  <div>
    <div class="title">
      <h1>{{obj.block_number}}</h1>
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
        obj:{}
      }
    },
    created() {
    axios(`http://localhost:4000/rows/${this.$route.params.id}`,(response)=>{
        console.log(response.data);
        this.obj = {...response.data}
        console.log('Dddee');
    });
    console.log(this.$route.params.id) // prints value of :id
  }
  }
</script>
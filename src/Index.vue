<template>
  <div id="app">
       <!-- navabar -->
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1"><img src="https://matic.network/_nuxt/img/logo.4ab86fb.svg"></span>
    </nav>
         <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data(){
    return{
      response:[]
    }
  },
}
</script>

<style>
nav{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  font-size:35px;
}
</style>

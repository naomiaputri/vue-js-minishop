<template>
  <div id="app" class="h-full">
    <router-view/>
  </div>  
</template>

<script>
import '@/assets/css/app.styl'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

</style>

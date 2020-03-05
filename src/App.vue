<template>
  <div id="app" class="h-full">
    <Header/>
    <Body/>
    <!-- <Payment/> -->
  </div>  
</template>

<script>
import '@/assets/css/app.styl'
// import Payment from './components/main/Payment.vue'
import Header from './components/main/Header.vue'
import Body from './components/main/Body.vue'


export default {
  name: 'App',
  components: {
    // Payment
    Header,
    Body,
  }
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

<template>
  <div class="h-full">
    <Header/>
    <Body/>
  </div>  
</template>

<script>
import Header from '@/components/main/Header.vue'
import Body from '@/components/main/Body.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Body,
  }
}
</script>


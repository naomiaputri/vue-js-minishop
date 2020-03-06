<template>
  <div class="flex">
    <div class="bg-gray-600 flex flex-row justify-between px-8 py-4 w-full">
      <div class="flex flex-row">
        <div class="text-white text-2xl capitalize mx-4 self-center">
          <a @click="setActiveCategories('all')" class="cursor-pointer">  WEB BERITA </a>
        </div>
        <div class="flex flex-row">
          <div v-for="(item, key) in getCategory" :key="key" @click="setActiveCategories(item)" class="text-lg text-white m-2 p-2 rounded border border-white"> 
            <a class="cursor-pointer"> {{ item }}</a> 
          </div>

        </div>
      </div>
      <div @click="setActiveCategories('all')" class="cursor-pointer text-white text-2xl capitalize mx-4 self-center">
        Hello
      </div>
      <div @click='logout' class="text-white text-2xl capitalize mx-4 self-center cursor-pointer">
        Logout
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters ({
      getCategory : 'getCategories',
      getActiveCategories : 'getActiveCategories'
    }),
  },
  methods : {
    ...mapActions({
      fetchCategory : 'fetchCategories',
      setActiveCategories : 'setActiveCategories'
    }),
    logout(){
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    this.fetchCategory()

  }
}
</script>



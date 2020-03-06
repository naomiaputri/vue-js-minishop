<template>
	<div class="bg-gray-50 mt-48 rounded-md flex flex-col w-64 mx-auto inset-y-auto items-center">
    <div class="capitalize font-bold text-2xl text-center mt-8">WEB BERITA</div>
    <div class="p-8">  
      <div class="font-bold text-base">Username</div>
      <input class="bg-white my-2 p-2 rounded shadow w-full" type="text" v-model='name'>
      <div class="font-bold text-base">Password</div>
      <input class="bg-white my-2 p-2 rounded shadow w-full" type="password" v-model='password'>
      <button @click='login' type="submit" class="bg-gray-700 text-white font-bold p-2 mt-4 justify-center">Sign In</button>
    </div>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Login',
  data(){
    return{
      name: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters ({
			setUser: 'setUser',
    }),
  },
  methods:{
    login(){
      if(this.user.name == this.name && this.user.password == this.password){
        this.$router.push('/')
      }else{
        alert('username dan password salah')
      }
    }
  }
}
</script>
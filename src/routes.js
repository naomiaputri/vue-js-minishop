import Login from './components/login/Login.vue'
import Home from './views/Home.vue'

export const routes = [
  { path:'/home', component: Home },
  { path:'/', component: Login }
]; 

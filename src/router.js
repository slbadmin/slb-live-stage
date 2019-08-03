import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import LoginForm from './views/LoginForm.vue'
import RegisterForm from './views/RegisterForm.vue'
import Artists from './views/Artists.vue'
import Schedule from './views/Schedule.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/artists',
      name: 'artists',
      component: Artists
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/registerform',
      name: 'registerform',
      component: RegisterForm
    },
    {
      path: '/loginform',
      name: 'loginform',
      component: LoginForm
    }

  ]
})

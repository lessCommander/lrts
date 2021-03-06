import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Search from './components/Search.vue'
import Category from './components/Category.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/boutique',
      name: 'boutique',
      // route level code-splitting
      // this generates a separate chunk (boutique.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "boutique" */ './components/Boutique.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import(/* webpackChunkName: "category" */ './components/Category.vue')
    }
  ]
})



    
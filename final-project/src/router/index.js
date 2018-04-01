import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Catalogue from '@/components/Catalogue'
import ProdDetails from '@/components/ProdDetails'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
      	name: 'HelloWorld',
      	component: HelloWorld
    },
    {
		path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
		path: '/signup',
    	name: 'Signup',
    	component: Signup
    },
    {
    	path: '/catalogue',
    	name: 'Catalogue',
    	component: Catalogue
    },
    {
      path: '/catalogue/:id',
      name: 'ProdDetails',
      component: ProdDetails
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ]
})

<template>
	<div class="container">
		<navbar></navbar>
		<hr>
		<h4 class="text-left">Cart</h4>
		<div>
			<div class="row">
				<div class="col-md-1 offset-md-11 text-center">
					<a href="">x</a>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					image
				</div>
				<div class="col-md-8">
					<div>product name</div>
					<div>product price</div>
					<div class="row">
						<div class="col-md-6">
							size:
						</div>
						<div class="col-md-6">
							quantity:
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div>
			<div class="row">
				<div class="col-md-6">
					<input id="continueShop" value="Continue Shopping" type="button" name="Submit" class="btn btn-secondary" onclick="">
				</div>
				<div class="col-md-6">
					<form method="post">
						<input id="checkout" value="Checkout" type="button" name="Submit" class="btn btn-secondary" v-on:click="submit()">
					</form>
				</div>
			</div>
		</div>
		<hr>
		<footbar></footbar>
	</div>
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import VueRouter from 'vue-router'
import router from '../router'
export default{
	data(){
		return{
			cartProducts:{}
		}
	},
	created: function(){
		this.showCart();
	},
	name: 'Cart',
  	components:{
    	'navbar': NavBar,
    	'footbar': Footer
  	},
  	methods: {
  		showCart(){

  		},
  		submit(){
  			router.push('/checkout');
  		}
  	}

}
</script>
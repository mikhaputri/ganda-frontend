<template>
	<div class="container">
		<navbar></navbar>
		<hr>
		<div class="row">
			<div class="col-md-6">
				<div>
					<img class="prod_image" v-bind:src="product.material">
				</div>
			</div>
			<div class="col-md-6 text-left">
				<h3 >{{ product.name }}</h3>
				<h5>IDR {{ product.price }}</h5>
				<p>{{ product.description }}</p>
				<div class="row">
					<div class="col-md-6">
						<select class="custom-select margin_size">
    						<option v-for="productDesc in productDescs" :value="productDesc.value">{{ productDesc.value }}</option>
  						</select>
					</div>
					<div class="col-md-6">
						<div class="input-group">
          					<input id="qty" type="text" name="qty" placeholder="quantity">
      					</div>
					</div>
				</div>
				<div>
					<form method="post">
						<input id="addCart" value="Add to Cart" type="button" name="Submit" class="btn btn-secondary" onclick="" v-on:click="goToCart()">
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
import router from '../router'
export default {
	data(){
		return{
			product: {},
			productDescs: []
		}
	},
	created: function(){
		this.showProduct();
		this.showProductDescVal();
	},
  	name: 'ProdDetails',
  	components:{
    	'navbar': NavBar,
    	'footbar': Footer
  	},
  	methods:{
  		showProduct(){
  			let uri = `http://localhost:8000/api/getProduct/${this.$route.params.id}`
  			this.axios.get(uri).then((response) => {
  				this.product = response.data
  			})
  		},
  		showProductDescVal(){
  			let uri = `http://localhost:8000/api/getProdDesc/${this.$route.params.id}`
  			this.axios.get(uri).then((response) =>{
  				this.productDescs = response.data
  			})
  		},
  		addCart(){
  			var qty = document.getElementById("qty").value
  			let uri = 'http://localhost:8000/api/checkStock/product.id/'.$qty
  		},
  		goToCart(){
  			router.push('/cart');
  		}
  	}
}
</script>

<style>
.prod_image{
	width: 70%;
	height: 70%;
}
.margin_size{
	margin-bottom: 20px;
}	
</style>
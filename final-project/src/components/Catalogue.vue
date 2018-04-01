<template>
	<div class="container">
		<navbar></navbar>
		<hr>
		<div class="row">
			<div class="col-md-2">
				<sidebar></sidebar>
			</div>
			<div class="col-md-10">
				<div class="row">
					<div v-for="product in products" class="col-md-4">
						<div>
							<router-link :to="{name:'ProdDetails', params: { id: product.id }}" class="thumbnail">
								<img class="prod_image" v-bind:src="product.material">
							</router-link>
							<!--<a href="#/proddetails" class="thumbnail">
      							<img class="prod_image" v-bind:src="product.material">
   							</a>-->
							<p class="margin_bottom">{{ product.name }}</p>
							<p>IDR {{ product.price }}</p>
						</div>
					</div>
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
import SideBar from './SideBar.vue'
export default {
	data(){
		return{
			products:[]
		}
	},
  	name: 'Catalogue',
  	components:{
    	'navbar': NavBar,
    	'footbar': Footer,
    	'sidebar': SideBar
  	},
  	created: function(){
  		this.showProducts()
  	},
  	methods:{
  		showProducts(){
  			let uri = 'http://localhost:8000/api/getProduct'
  			this.axios.get(uri).then((response) => {
  				this.products = response.data
  			})
  		},
  		/*chooseProducts(){
  			let uri = 'http://localhost:8000/api/getProduct/${this.$route.params.id}'
  			this.axios.get(uri).then((response) => {
  				this.$router.push({name: 'ProdDetails'})
  			})
  		}*/
  	}
}
</script>

<style scoped>
.prod_image{
	width: 70%;
	height: 70%;
}
a:hover{
	opacity: 0.5;
}
.margin_bottom{
	margin-bottom: 2px;
}
</style>
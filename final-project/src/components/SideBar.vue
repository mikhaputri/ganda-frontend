<template>
<div>
	<div class="text-center panel-group" id="accordion">
  		<div class="panel panel-default">
    		<div class="panel-heading">
      			<h5 class="panel-title">
        			<a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Clothing  <i class="fa fa-angle-down"></i></a>
      			</h5>
    		</div>
    		<hr>
    		<div id="collapse1" class="panel-collapse collapse in">
      			<div class="panel-body"><a href="#/tops" class="panel-body" v-on:click="updateProducts">Tops</a></div>
      			<div class="panel-body collapse_opt"><a href="#/bottoms" class="panel-footer">Bottoms</a></div>
    		</div>
  		</div>
  		<div class="panel panel-default">
    		<div class="panel-heading">
      			<h5 class="panel-title">
        			<a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Shoes  <i class="fa fa-angle-down"></i></a>
      			</h5>
    		</div>
    		<hr>
    		<div id="collapse2" class="panel-collapse collapse">
      			<div class="panel-body"><a href="#/tops" class="panel-body">Flats</a></div>
      			<div class="panel-body collapse_opt"><a href="#/bottoms" class="panel-footer">Heels</a></div>
    		</div>
  		</div>
	</div>
	<div>
		<p class="margin_bottom">Filters</p>
		<div class="checkbox cbox">
  			<label><input type="checkbox" value="black">Black</label>
		</div>
		<div class="checkbox cbox">
  			<label><input type="checkbox" value="white">White</label>
		</div>
		<div class="checkbox cbox">
  			<label><input type="checkbox" value="green">Green</label>
		</div>
		<div class="checkbox cbox">
  			<label><input type="checkbox" value="yellow">Yellow</label>
		</div>
		<div>
			<span class="input-group-btn">
              	<button class="btn btn-default cbox" type="button">Apply</button>
            </span>
		</div>
	</div>
</div>
</template>

<script>
export default{
  data(){
    return{
      products:[]
    }
  },
	name: 'SideBar',
  created: function(){
    this.showProductsbySubCat
  },
  methods:{
    showProductsbySubCat: function(){
      let uri = 'http://localhost:8000/api/showBySubCategory/952c44ee-823d-4505-a955-12024e44450e'
        this.axios.get(uri).then((response) => {
          this.products = response.data
        })
    },
    updateProducts: function(){
      this.$emit('updateProducts', 'products')
    }
  }
}
</script>

<style scoped>
.margin_bottom{
	margin-bottom: 2px;
}
.collapse_opt{
	margin-bottom: 10px;
}
.cbox{
	font-size: 12px;
}
</style>
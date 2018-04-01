<template>
	<div class="container">
    <div class="row">
      <div class="col-md-12">
        <img class="logo" alt="Brand" src="../assets/logo.jpeg">
      </div>
    </div>
		<nav class="navbar navbar-default navbar-fixed-top">
      		<div class="container-fluid">
        		<a href="#"><strong>New Arrivals</strong></a>
        		<a href="#/catalogue">Clothing</a>
        		<a href="#">Shoes</a>
            <div class="dropup">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-search"></i>
              </a>
              <ul class="dropdown-menu">
                <div class="row">
                  <div class="col-md-12">
                    <form action="/action_page.php">
                      <input type="text" class="form-control" placeholder="Search" name="search">
                    </form>
                  </div>
                </div>
              </ul>
            </div>
            <div>
              <a href="#/cart">
                  <i class="fa fa-shopping-bag"></i>
                </a>
            </div>
        		<div>
          			<a href="#/login">
                  <i class="fa fa-user-circle-o"></i>
                </a>
        		</div>
      		</div>
    	</nav>
	</div>
</template>

<script>
export default{
	name: 'NavBar'
}
</script>

<style scoped>
.logo{
  width: 200px;
  height: 80px;
}
</style>
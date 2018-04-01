<template>
  <div class="hello">
    <navbar></navbar>
    <div class="container-fluid">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class= "img-carousel" src="../assets/mirror.jpeg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class= "img-carousel" src="../assets/faces.jpeg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class= "img-carousel" src="../assets/jumsuit.jpeg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
export default {
  name: 'HelloWorld',
  components:{
    'navbar': NavBar,
    'footbar': Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.img-carousel{
  width: 1000px;
  height: 600px;
}

.div{
  color: black;
}

.nav-search{
  display: inline-block;
}
</style>

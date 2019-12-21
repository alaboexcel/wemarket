<template>
    <div>
        <div id="carousel" class="row">
      <div class="col">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/images/nrd-D6Tu_L3chLE-unsplash.jpg" width="100%" height="700px" >
        <div class="container">
          <div class="carousel-caption text-left mt-1">
            <h1>WeMarket offers the best.</h1>
            <h5 class="go-shoping"><router-link to="/shop">Shop</router-link></h5>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/images/jakub-kapusnak-vnNFWKY7Tj4-unsplash.jpg" width="100%" height="700px" >
        <div class="container">
          <div class="carousel-caption">
            <h1>WeMarket.</h1>
            <h5 class="go-shoping"><router-link to="/shop">Shop</router-link></h5>
          </div>
        </div>
      </div>
      <div class="carousel-item">
         <img src="../assets/images/ja-ma--gOUx23DNks-unsplash.jpg" width="100%" height="700px" >
        <div class="container">
          <div class="carousel-caption text-right">
            <h1>One more for good measure.</h1>
            <h5 class="go-shoping"><router-link to="/shop">Shop</router-link></h5>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
      </div>
    </div>
    <div class="row">
        <div class="col-12">
            <h4>At WeMarket,<br> we offer the best of our services at offering you<br> with good and healthy food and fruits <br> for better nourishment and enrichment of our body. <br> We are committed to providing you with <br> the best of vegetables, tuber foods, <br> cereals, grains, cooking oil and <br> many more here at
            </h4>
    </div>
    </div>
    </div>
</template>

<script>
export default {

}

</script>

<style scoped>
.go-shoping{
  background: darkgreen;
  color: lightgreen;
  width: 100px;
  height: 50px;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
}
a{
    text-decoration: none;
    color: lightgreen;
}
a:hover{
    text-decoration: none;
    color:lightgreen;
}
h4{
    text-align: center;
    padding: 100px;
}
</style>
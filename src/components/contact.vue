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

    <div id="big" class="row">
        <div id="side" class="col-lg-5 col-md-10 col-sm-12">
           <br> <h4>Contact Information</h4><br>
            <h5>No 50 NTA Road Choba Port Harcourt Nigeria</h5><br>
            <h5>+234-806-903-5037</h5><br>
            <h5>WeMarket@gmail.com</h5><br>
            <h5>WeMarket.net</h5>

        </div>
        <div id="right" class="col-lg-5 col-md-10 col-sm-10">
           <br> <input type="text" placeholder="Name"><br><br>
            <input type="text" placeholder="Phone Number"><br><br>
            <input type="text" placeholder="Email"><br><br>
            <textarea id="texting" ></textarea>
            <p id="submit">SUBMIT</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}

</script>

<style scoped>
input{
    width: 90%;
    height: 50px;
}


#texting{
    width: 90%;
    height: 100px;
}


#submit{
    background: darkgreen;
    color: lightgreen;
    width: 100px;
    height: 40px;
    text-align: center;
    border-radius: 5px;
    padding-top: 8px;
}
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
#side{
  margin-left: 50px;
}
#big{
  padding: 50px;
  text-align: center;
}
#right{
  margin-left: 50px;
}
</style>
<template>
  <div id="footer">
    <div></div>
    <div class="row" >
      <div id="big" class="col-lg-12 col-md-12 col-sm-12">
      <a href=""> <img id="first" :src="mail"></a> 
      <a href="">  <img id="first" :src="phone"></a>
      </div>
    </div>  
    <div class="row">
      <div id="small" class="col-lg-12 col-md-12 col-sm-12">
        <a href="http://www.facebook.com"><img id="second" :src="facebook"></a>
        <a href="http://www.whatsapp.com"><img id="second" :src="watsapp"></a>
       <a href="http://www.github.com"> <img id="second" :src="github"></a>
        <a href="http://www.twitter.com"><img id="second" :src="twitter"></a>
        <a href="http://www.instagram.com"><img id="second" :src="instagram"></a>

      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr>
        <h6>Copyright WeMarket 2019</h6>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  data (){

   return{
     facebook: require('@/assets/logos/facebook.svg'),
     watsapp: require('@/assets/logos/whatsapp.svg'),
     instagram: require('@/assets/logos/instagram.svg'),
     twitter: require('@/assets/logos/twitter.svg'),
     mail: require('@/assets/logos/envelope.svg'),
     phone: require('@/assets/logos/phone.svg'),
     github: require('@/assets/logos/github.svg')

   }
}
}
</script>

<style scoped>
#footer{
  max-width: 100%;
    background: lightgreen;
    height: 50vh;
    color: darkgreen;
}
hr{
    background: darkgreen;
}
h6{
  text-align: center;
}
#first{
  width: 50px;
  margin-left: 50px;
  margin-right: 30px;
}
#second{
  width: 30px;
  margin-left:10px;
  margin-right: 15px;
}
#big{
  padding-left: 40%;
  padding-top: 60px;
}
#small{
  padding-left: 40%;
  padding-top: 80px;
  padding-bottom: 50px;
}
</style>
<template>
  <div id="container"  class="col-sm-12 col-md-10 col-lg-12 " justify-center>
      <input id="first" type="text" placeholder="Country"><br><br>
      <input type="number" placeholder="Card Number"><br><br>
            <span>Card Type </span>
        <select name="" id="">
            <option value="">Visa</option>
            <option value="">Master Card</option>
            <option value="">Verve</option>
            </select><br><br>
      <input type="number" placeholder="Expiry Date"><br><br>
<h5>Billing Information</h5>
      <input type="number" placeholder="First Name"><br><br>
      <input type="number" placeholder="Last Name"><br><br>

      <router-link to="/shop"><button>Send</button></router-link>
  </div>
</template>

<script>

export default {
  data (){

   return{
    
   }
}
}
</script>

<style scoped>
input{
    width: 50%;
}
#container{
    margin-left: 25%;
    height: 90vh;
}
#first{
    margin-top: 15%;
}
button{
    background-color: lightgreen;
    border: none;
    width: 10%;
    color: white;
    border-radius: 10%;
}
</style>
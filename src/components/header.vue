<template>
<div class="container-fluid">
    <nav  class="navbar navbar-expand-md fixed-top ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <img :src="logo">
      <h5>
    <ul class="navbar-nav mr-auto">
        <li id="brand" class="nav-item ">
        <a>WeMarket <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/shop">Gallary</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
        <router-link to="/contact"> Contact Us</router-link>
        </li>
        
    </ul>
   </h5>
  </div>
</nav>
</div>
</template>

<script>

export default{
    data(){
      return{
             logo:require('@/assets/mylogo.png')
      }
  }
}

</script>

<style scoped>
nav{
    padding: 5px 0;
    background: lightgreen;
    width: 100%;
    height: 50px;
}
li{
  display: inline-block;
    margin: 0 28px;
    color: darkgreen;
}
ul{
    list-style-type: none;
    margin: 0;
    text-align: right;
}

a{
    text-decoration: none;
    color: darkgreen;
}
a:hover{
    text-decoration: none;
    color: darkgreen;
}
#brand{
    margin-left: 100px;
    margin-right: 300px;
}
img{
  width: 76px;
  margin-left: 50px;
}
</style>

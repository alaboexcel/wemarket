<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
 
<script>
import home from'./components/home.vue';
import header from'./components/header.vue';
import shop from'./components/shop.vue';
import footer from'./components/footer.vue';


export default {
  components:{
    'app-header': header,
    'home': home,
    'shop': shop,
    'app-footer': footer
  },
  data(){
    return{
     
    }
  }
}
</script>

<style>
body{
  margin: 0;
  overflow-x: hidden;
}
#app{
  font-family: sans-serif;
  max-width: 100% !important;
}
</style>

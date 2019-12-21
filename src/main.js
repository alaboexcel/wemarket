import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import jQuery from 'jquery'
global.jQuery = jQuery
let Bootstrap = require ('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import Routes from './routes'


Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el:'#app',
  render: h => h(App),
  router: router
})
 
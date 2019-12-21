import home from './components/home.vue';
import shop from './components/shop.vue';
import contact from './components/contact.vue';
import about from './components/about.vue';
import Purchase from './components/Purchase.vue';


export default [
    { path: '/', component:home},
    { path: '/shop', component:shop},
    { path: '/contact', component:contact},
    { path: '/about', component:about},
    { path: '/buy', component:Purchase}


] 
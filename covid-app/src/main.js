
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueRouter from 'vue-router';
Vue.config.productionTip = false
Vue.prototype.$http=axios;
Vue.use(VueRouter);
const routes = [
  { path: '/app', component:()=> import('./view/Home.vue'),
childs:[] },
  { path: '/', component:()=> import('./view/Login.vue') },

]
const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

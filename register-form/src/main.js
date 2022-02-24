import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import Routes from './routes'

Vue.use(Router);


const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: Routes
});



Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

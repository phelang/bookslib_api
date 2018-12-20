// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

/* Material Design with Vue and Bootstrap */
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';

/* Bootstrap Vue */
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* Routes - Pages and Template Pages*/
import Home from './components/Home'


/* Font awesome js */
import 'font-awesome/css/font-awesome.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import App from './App'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
  ]
});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

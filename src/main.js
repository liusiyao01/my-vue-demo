// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Layout from './components/layout';
import VRouter from 'vue-router';
import Vuex from 'vuex';
// import Apple from './components/apple';
// import Banana from './components/banana';
// import RedApple from './components/redApple';

Vue.use(VRouter);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Layout/>',
  components: { Layout }
});

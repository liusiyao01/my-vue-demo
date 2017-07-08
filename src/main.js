// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Layout from './components/layout';
import VRouter from 'vue-router';
import VueResource from 'vue-resource';

// components
import IndexPage from './page/index';

Vue.use(VRouter);
Vue.use(VueResource);

let router = new VRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
});

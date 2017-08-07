// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Layout from './components/layout';
import VRouter from 'vue-router';
import VueResource from 'vue-resource';

// components
import IndexPage from './page/index';
import DetailPage from './page/detail';
import DetailAnaPage from './page/detail/analysis';
import DetailCouPage from './page/detail/count';
import DetailForPage from './page/detail/forecast';
import DetailPubPage from './page/detail/publish';

Vue.use(VRouter);
Vue.use(VueResource);

let router = new VRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
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

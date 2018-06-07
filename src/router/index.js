import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App';
import Row from '@/pages/Row';
Vue.use(Router)
export default new Router({
    routes: [
      {
        path: '/row/:id',
        name: 'Row',
        component: Row
      },
      {
        path: '/',
        name: 'App',
        component: App
      }
    ]
  });
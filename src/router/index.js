import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import BlockTransactions from '../pages/BlockTransactions';
import Block from '@/pages/Block';
import Transaction from '@/pages/Transaction';

Vue.use(Router)
export default new Router({
    routes: [
      {
        path: '/block/:id',
        name: 'block',
        component: Block
      },
      {
        path: '/transaction/:id',
        name: 'transaction',
        component: Transaction
      },
      {
        path: '/',
        name: 'App',
        component: App
      },
      {
        path: '/block/transactions/:id',
        name: 'BlockTransactions',
        component: BlockTransactions
      }
    ]
  });
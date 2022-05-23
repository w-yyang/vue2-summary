import Vue from 'vue'
import VueRouter from 'vue-router'

import { routerList } from './router-list';

Vue.use(VueRouter)

const routes = routerList.map(routerItem => {
  return {
    path: routerItem.path,
    name: routerItem.name,
    component: () => import(/* webpackChunkName: "Home" */ `../views/${routerItem.name}.vue`),
    children: routerItem.children ? routerItem.children : null
  };
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

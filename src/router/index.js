import Vue from 'vue'
import Router from 'vue-router'
import shouye from '../pages/shouye/shouye'
import sousuo from '../pages/sousuo/sousuo'
import dingdan from '../pages/dingdan/dingdan'
import wode from '../pages/wode/wode'
import Login from '../pages/Login/Login'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: shouye,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/sousuo',
      component: sousuo,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/dingdan',
      component: dingdan,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/wode',
      component: wode,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    {path: '/', name: 'home', component: Home},
    {path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ './views/About.vue')},
    {path: '/invite', name: 'invite', component: () => import(/* webpackChunkName: "invite" */ './views/share/invite.vue')},
    {path: '/landing', name: 'landing', component: () => import(/* webpackChunkName: "landing" */ './views/share/landing.vue')},
    {path: '/landings', name: 'landings', component: () => import(/* webpackChunkName: "landings" */ './views/share/landings.vue')},
    {path: '/qrCode', name: 'qrCode', component: () => import(/* webpackChunkName: "qrCode" */ './views/share/qrCode.vue')},
  //    我的模块--合伙人权益
    {path: '/equity', name: 'equity', component: () => import(/* webpackChunkName: "equity" */ './views/mine/equity.vue')},
    //  备用
    {path: '/equitys', name: 'equitys', component: () => import(/* webpackChunkName: "equitys" */ './views/mine/equitys.vue')},
    {path: '/protocol', name: 'protocol', component: () => import(/* webpackChunkName: "protocol" */ './views/share/protocol.vue')},
    //  protocols--ios独有【审核用】
    {path: '/protocols', name: 'protocols', component: () => import(/* webpackChunkName: "protocols" */ './views/share/protocols.vue')},



  ]
})

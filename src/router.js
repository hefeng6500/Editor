import Vue from 'vue'
import Router from 'vue-router'
import wangEditor from './views/wangEditor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wangEditor',
      component: wangEditor
    },
    {
      path: '/kindeditor',
      name: 'kindeditor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/kindeditor.vue')
    },{
      path: '/UEditor',
      name: 'UEditor',
      component: () => import('./views/UEditor.vue')
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Index from '@/views/index'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/',
      name: 'index',
      component: Index,
      children: [
        { path: '/', name: 'welcome', component: Welcome }
      ]
    },
    // 路径走到这个位置的时候,证明没任何程序去处理这个路径
    { path: '*', name: '404', component: NotFound }
  ]
})

// 注册一个全局前置导航守卫
router.beforeEach((to, from, next) => {
  const user = window.sessionStorage.getItem('jiuye04')
  if (to.path !== '/login' && !user) return next('/login')
  next()
})
export default router

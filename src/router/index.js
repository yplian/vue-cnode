import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/vuex'

import Topics from '@/views/Topics'
import Login from '@/views/Login'
import Article from '@/views/Article'
import User from '@/views/User'
import Messages from '@/views/Messages'
import Create from '@/views/Create'


Vue.use(Router)

const router =new Router({
  routes: [
    {
      path: '/',
      redirect:'topics'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/topics',
      name: 'Topics',
      component: Topics
    },
    {
      path: '/topics/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/user',
      name: 'Mine',
      component: User,
      alias: '/mine'
    },
    {
      path: '/user/:loginname',
      name: 'User',
      component: User
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (store.state.userInfo.success) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })

export default router

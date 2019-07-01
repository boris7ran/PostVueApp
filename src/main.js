import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import PostsList from '@/components/PostsList'
import UsersList from '@/components/UsersList'
import FullUserData from '@/components/FullUserData'

const routes = [
  { path: '/posts', component: PostsList},
  { path: '/users', component: UsersList},
  { path: '/users/:id', component: FullUserData}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

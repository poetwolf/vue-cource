import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login'})
  } else {
    if (HAS_LOGINED) next({ name: 'home'})
    else next()
  }
})


router.afterEach((to, from) => {

})
export default router

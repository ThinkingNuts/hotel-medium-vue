import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Login = resolve => require(['../views/account/Login'], resolve) //懒加载

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

/*router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.matched.some(record => record.meta.requireAuth)) {
    const auth = store.state.account.auth;
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.check()) {
      next({
        path: '/user/login',
        query: { redirect_url: to.fullPath }
      });
      return;
    }
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});*/

export default router;
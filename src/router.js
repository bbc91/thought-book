import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "register" */ './views/Register.vue'),
            meta: {
                requiresGuest: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    let user = store.getters.loggedUser;
    if (to.matched.some(record => record.meta.requiresGuest)) {
        // this route requires Guest, check if logged in
        // if yes, redirect to homepage.
        if (user) {
            next({
                path: '/'
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});

export default router;

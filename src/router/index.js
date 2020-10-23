import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from "@/views/Profile";
import Login from "@/views/Login";
import About from "@/views/About";

import {store} from '@/store/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Profile
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/restricted',
        name: 'Testing',
        component: About
    }
]

const router = new VueRouter({
    mode: process.env.IS_ELECTRON ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()

    } else if (store.state.user.is_authenticated === false) {
        next({path: '/login'});
    } else {

        next();
    }
})

export default router

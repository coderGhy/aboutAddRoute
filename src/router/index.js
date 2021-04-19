import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('./../views/index.vue')
        },
        {
            path: '*',
            name: '404',
            component: () => import('./../views/404.vue')
        }
    ]
})
export default router
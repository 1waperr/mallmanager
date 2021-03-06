import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login/login.vue'
// 简写 @ 会自动找到src
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Users from '@/components/users/users.vue'
import Right from '@/components/rights/right.vue'
import Role from '@/components/rights/role.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
        name: 'login',
        path: '/login',
        component: Login
    }, {
        name: 'home',
        path: '/',
        component: Home,
        children: [{
            name: 'users',
            path: '/users',
            component: Users
        }, {
            name: 'right',
            path: '/rights',
            component: Right
        }, {
            name: 'roles',
            path: '/roles',
            component: Role
        }]
    }]
})

// 在路由配置生效之前 统一判断token
// 路由/导航 守卫
router.beforeEach((to, from, next) => {
    // 
})
export default router
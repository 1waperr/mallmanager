import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login/login.vue'
// 简写 @ 会自动找到src
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Users from '@/components/users/users.vue'
import Right from '@/components/rights/right.vue'
import Role from '@/components/rights/role.vue'
import Goodslist from '@/components/goods/goodslist.vue'
import Goodsadd from '@/components/goods/goodsadd.vue'
import Cateparams from '@/components/goods/cateparams.vue'
import Goodscate from '@/components/goods/goodscate.vue'
import Order from '@/components/order/order.vue'

import { Message } from 'element-ui'

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
        }, {
            name: 'goods',
            path: '/goods',
            component: Goodslist
        }, {
            name: 'goodsadd',
            path: '/goodsadd',
            component: Goodsadd
        }, {
            name: 'params',
            path: '/params',
            component: Cateparams
        }, {
            name: 'categories',
            path: '/categories',
            component: Goodscate
        }, {
            name: "",
            path: "/order",
            component: Order
        }]
    }]
})

// 在路由配置生效之前 统一判断token
// 路由/导航 守卫
router.beforeEach((to, from, next) => {
    // to 要去的路由配置
    // from 当前的路由配置
    // next 
    // 如果要去的是登录 next
    if (to.path === '/login') {
        next()
    } else {
        // 如果要去的不是登录
        // 判断token
        const token = localStorage.getItem('token')
        if (!token) {
            // 如果没有token login
            // 提示
            Message.warning('回到登录页')
            router.push({
                name: 'login'
            })
            return
        }
        // 如果有token next
        next()
    }
})
export default router
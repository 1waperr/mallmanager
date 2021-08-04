// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// 不要忘记引入css文件
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/assets/css/reset.css'
import MyServerHttp from '@/plugins/http.js'
import moment from 'moment'
// 全局组件
// MyBread 其实是组件选项所在的对象{templata:'',data...}
import MyBread from '@/components/cuscom/myBread.vue'

// 使用Vue插件
Vue.use(ElementUI)
Vue.use(MyServerHttp)

Vue.config.productionTip = false

// 全局过滤器--处理日期
Vue.filter('fmtdate', (v) => {
    return moment(v).format('YYYY-MM-DD')
})

// 全局自定义组件
Vue.component('my-bread', {
    template: '',
    data() {
        return {
            property: 'value',
        };
    },
    props: []
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
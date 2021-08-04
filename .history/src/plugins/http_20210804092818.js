// 插件模块
import axios from 'axios'

// 对象
const MyHttpServer = {}

// 给对象动态添加成员
MyHttpServer.install = (Vue) => {
    // 统一设置基准URL
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

    // .在请求发起之前 会先来到下面的回调函数
    // 添加请求拦截器
    axios.interceptors.request.use(function(config) {

    })


    // 添加实例方法
    Vue.prototype.$http = axios
}

export default MyHttpServer
// 插件模块
import axios from 'axios'

// 对象
const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
    // 添加实例方法
    Vue.prototype.$http = axios
}
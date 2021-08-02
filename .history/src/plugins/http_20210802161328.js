// 插件模块
import axios from 'axios'

// 对象
const MyHttpServer = {}

// 给对象动态添加成员
MyHttpServer.install = (Vue) => {
    // 添加实例方法
    Vue.prototype.$http = axios
}

export default MyHttpServer
<template>
    <el-container class="container">
        <!-- 头部 -->
        <el-header class="header">
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <img src="../../assets/logo.png" alt="无法显示该图片">
                    </div>
                </el-col>
                <el-col :span="18" class="middle">
                    <h3>电商后台管理系统</h3>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content bg-purple">
                        <a class="loginout" @click.prevent="handleSignout()" href="#">退出</a>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <!-- 侧边栏 -->
            <el-aside class="aside" width="200px">
                <!-- 开启路由模式为true   :router="true" -->
                <el-menu
                :router="true"
                :unique-opened="true">
                <!-- 1 -->
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                    </template>
                    <!-- <template slot="title">分组一</template> -->
                    <el-menu-item index="users">
                         <i class="el-icon-menu"></i>
                         <span>用户列表</span>
                    </el-menu-item>
                </el-submenu>

                </el-menu>
            </el-aside>
            <el-main class="main">
                <router-view>

                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default{
    data() {
        return {
            meun:[]
        };
    },
  // new Vue之前触发
  beforeCreate () {
    // 获取token
    const token = localStorage.getItem('token')
    if (!token) {
      // token 没有--登录
      this.$router.push({ name: 'login' })
    }
    // if token 有--渲染组件
  },
  created(){
      this.getMenus()
  },
  methods: {
    //   获取导航数据
    async getMenus(){
        const res = await this.$http.get('menus')
        this.menus = res.data.data
    },
    handleSignout () {
      // 1、清除token
      localStorage.clear()
      // 2、提示
      this.$message.success('退出成功')
      // 3、来到login组件
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>
.container{
    height: 100%;
}
.header{
    background-color: #b3c0d1;
}
.aside{
    background-color: #fff;
}
.main{
    background-color: #e9eef3;
    height: 100%;
}
/* 头部样式 */
.middle{
    text-align: center;
    color: rgb(252, 248, 248);
}
.loginout{
    line-height: 60px;
    text-decoration: none;
}
</style>

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
                        <a class="loginout" href="#">退出</a>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <!-- 侧边栏 -->
            <el-aside class="aside" width="200px">
                <el-menu>
                    <!-- 1 -->
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                    </template>
                    <!-- <template slot="title">分组一</template> -->
                    <el-menu-item index="1-1">
                         <i class="el-icon-location"></i>
                         <span>用户列表</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 2 -->
                <el-submenu index="2">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>权限管理</span>
                    </template>
                    <!-- <template slot="title">分组一</template> -->
                    <el-menu-item index="1-1">
                         <i class="el-icon-menu"></i>
                         <span>角色列表</span>
                         <span>权限列表</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 3 -->
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>商品管理</span>
                    </template>
                    <!-- <template slot="title">分组一</template> -->
                    <el-menu-item index="1-1">
                         <i class="el-icon-location"></i>
                         <span>用户列表</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 4 -->
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                    </template>
                    <!-- <template slot="title">分组一</template> -->
                    <el-menu-item index="1-1">
                         <i class="el-icon-location"></i>
                         <span>用户列表</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 5 -->
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>数据统计</span>
                    </template>
                    <!-- <template slot="title">分组一</template> -->
                    <el-menu-item index="1-1">
                         <i class="el-icon-location"></i>
                         <span>用户列表</span>
                    </el-menu-item>
                </el-submenu>

                </el-menu>
            </el-aside>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default{

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
    background-color: #d3dce6;
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

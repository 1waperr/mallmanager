<template>
    <el-card>
        <!-- 1、面包屑 -->
        <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb> -->

        <my-bread level1="权限管理" level2="权限列表"></my-bread>

    </el-card>
</template>

<script>

export default {

  created(){
      this.getRightlist()
  },
  methods:{
      async getRightlist(){
          // 需要授权的API 必须在请求头中使用 Authorization 字段提供token令牌
      const AUTH_TOKEN = localStorage.getItem('token')
      this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN


        //   type参数的值 list / tree
          const res = await this.$http.get('rights/list')
          console.log(res);
      }
  }

}
</script>

<style>

</style>

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

import myBread from '../cuscom/myBread.vue'

export default {
  components: { myBread },

  created(){
      
  }

}
</script>

<style>

</style>

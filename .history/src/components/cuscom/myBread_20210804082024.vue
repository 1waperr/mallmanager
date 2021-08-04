<template>
    <!-- 1、面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
        
</template>

<script>
export default {
    data() {
        return {
            // property: 'value',
        }
    },
    props:['level1','level2']
}
</script>

<style>

</style>

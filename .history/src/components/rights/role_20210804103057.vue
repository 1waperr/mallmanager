<template>
  <el-card>
    <!-- 1、面包屑 -->
    <my-bread level1="权限管理" level2="角色列表"></my-bread>

    <!-- 2、添加角色按钮 -->
    <el-row>
        <el-col>
            <el-button plain>添加角色</el-button>
        </el-col>
    </el-row>


  </el-card>
</template>

<script>
export default {
    data() {
        return {
            rolelist: [],
        };
    },
    created(){
        this.getRolelist()
    },
    methods:{
        async getRolelist(){
            const res = await this.$http.get('roles')
            console.log(res);
            this.rolelist = res.data.data
        }
    }
};
</script>

<style>
</style>

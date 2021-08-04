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

    <!-- 3、表格 -->
    <el-table :data="rolelist" style="width: 100%">
      <el-table-column type="index" label="#" width="60"> </el-table-column>
      <el-table-column prop="username" label="角色名称" width="180"> </el-table-column>
      <el-table-column prop="email" label="角色描述" width="200"> </el-table-column>
      <el-table-column prop="mobile" label="电话" width="180"> </el-table-column>
      <el-table-column prop="address" label="操作" width="200">
        <template slot-scope="scope">
            <el-button @click="showEditUserDia(scope.row)" size="mini" type="primary" icon="el-icon-edit" plain circle></el-button>
            <el-button @click="showDeleUserMsgBox(scope.row.id)" size="mini" type="danger" icon="el-icon-delete" plain circle></el-button>
            <el-button @click="showSetUserRoleDia(scope.row)" size="mini" type="success" icon="el-icon-check" plain circle></el-button>
        </template>
      </el-table-column>
    </el-table>


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

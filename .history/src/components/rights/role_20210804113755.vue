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
         <el-table-column type="expand" width="150"> 
             <template slot-scope="scope">
                 <!-- 展开一级权限 -->
                 <el-row v-for="(item1,i) in scope.row.children" :key="i">
                     <el-col :span="4">
                         <el-tag closable>{{item1.authName}}</el-tag>
                     </el-col>
                     <el-col :span="20">
                         <!-- 展开二级权限 -->
                         <el-row v-for="(item2,i) in item1.children" :key="i">
                             <el-col :span="4">
                                 <el-tag closable>{{item2.authName}}</el-tag>
                             </el-col>
                             <!-- 展开三级权限 -->
                             <el-col :span="20">
                                 <el-tag closable v-for="(item3,i) in item2.children" :key="i">{{item3.authName}}</el-tag>
                             </el-col>
                         </el-row>
                     </el-col>
                 </el-row>
             </template>
         </el-table-column>
      <el-table-column type="index" label="#" width="100"> </el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="300"> </el-table-column>
      <el-table-column prop="roleDesc" label="角色描述" width="200"> </el-table-column>
      <el-table-column prop="address" label="操作" width="300">
        <template >
            <el-button size="mini" type="primary" icon="el-icon-edit" plain circle></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" plain circle></el-button>
            <el-button size="mini" type="success" icon="el-icon-check" plain circle></el-button>
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

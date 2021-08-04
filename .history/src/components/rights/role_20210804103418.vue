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
      <el-table-column prop="username" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"> </el-table-column>
      <el-table-column prop="mobile" label="电话" width="180"> </el-table-column>
      <el-table-column label="创建日期" width="160">
          <!-- 如果单元格内显示的内容不是字符串（文本）
            需要给被显示的内容外层包裹一个template
           -->
           <!-- template内部要用数据 设置slot-scope属性
                该属性的值是要用数据create_time的数据源userlist
            -->
            <!--
                slot-scope的值userlist其实就是el-table绑定的数据userlist
                userlist.row---》数组中的每个对象
             -->
             <template slot-scope="userlist">
                 {{userlist.row.create_time | fmtdate}}
             </template>
      </el-table-column>
      <el-table-column label="用户状态" width="160">
        <template slot-scope="scope">
            <el-switch
              @change="changeMgState(scope.row)"
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
        </template>

      </el-table-column>
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

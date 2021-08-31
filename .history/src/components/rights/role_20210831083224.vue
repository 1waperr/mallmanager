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
         <el-table-column type="expand" width="180">
             <template slot-scope="scope">
                 <!-- 展开一级权限 -->
                 <el-row v-for="(item1,i) in scope.row.children" :key="i">
                     <el-col :span="4">
                         <!-- 传值 角色 和 权限id -->
                         <el-tag @close="deleRole(scope.row,item1.id)" class="roleslist" closable>{{item1.authName}}</el-tag>
                         <i class="el-icon-arrow-right"></i>
                     </el-col>
                     <el-col :span="20">
                         <!-- 展开二级权限 -->
                         <el-row v-for="(item2,i) in item1.children" :key="i">
                             <el-col :span="4">
                                 <el-tag @close="deleRole(scope.row,item2.id)" class="roleslist" type="success" closable>{{item2.authName}}</el-tag>
                                 <i class="el-icon-arrow-right"></i>
                             </el-col>
                             <!-- 展开三级权限 -->
                             <el-col :span="20">
                                 <el-tag @close="deleRole(scope.row,item3.id)" class="roleslist" type="warning" closable v-for="(item3,i) in item2.children" :key="i">{{item3.authName}}</el-tag>
                             </el-col>
                         </el-row>
                     </el-col>
                 </el-row>

                 <!-- 无权限的展示 -->
                <span v-if="scope.row.children.length==0">未分配权限</span>

             </template>
         </el-table-column>
      <el-table-column type="index" label="#" width="200"> </el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="200"> </el-table-column>
      <el-table-column prop="roleDesc" label="角色描述" width="200"> </el-table-column>
      <el-table-column prop="address" label="操作" width="300">
        <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" plain circle></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" plain circle></el-button>
            <el-button @click="showSetRightDia(scope.row)"
             size="mini" type="success" icon="el-icon-check" plain circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改权限的对话框 -->
    <el-dialog title="分配权限" :visible.sync="dialogFormVisibleRight">
        <!-- 树形结构
        树形说明：
            data:数据源[]
            show-checkbox--选择框
            node-key -- 每个节点的唯一标识 通常是data数据源中key名id
            default-expanded-keys 默认展开【要展开的节点的id】
            default-checked-keys 【要选择的节点的id】
            props 配置项{label，children}
                label节点的文字标题和children节点的子节点
                值都来源于data绑定的数据源中的该数据的key名 'label''children'

            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"

        默认展开所有
        :default-expanded-keys="arrexpand"
        default-expand-all
         -->
        <el-tree
        ref="tree"
        :data="treelist"
        show-checkbox
        node-key="id"
        default-expand-all
        :default-checked-keys="arrcheck"
        :props="defaultProps">
        </el-tree>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleRight = false">取 消</el-button>
        <el-button type="primary" @click="setRoleRight()">确 定</el-button>
    </div>
    </el-dialog>

  </el-card>
</template>

<script>
export default {
  data () {
    return {
      rolelist: [],
      dialogFormVisibleRight: false,
      // 树形结构的数据
      treelist: [],
      defaultProps: {
        label: 'authName',
        children: 'children'
      },
      // 所有节点的id值
      arrexpand:[],
      arrcheck:[],
      currRoleId:-1
    }
  },
  created () {
    this.getRolelist()
  },
  methods: {
    // 修改权限--发送请求
    async setRoleRight(){
      // roles/:roleId/rights
      // roleId 当前要修改权限的角色

      // rids 树形节点中 所有全选和半选的label的id
      // 获取全选的id的数组 arr1
      // 1、给要操作的dom元素 设置ref属性值 input ref="txt"
      // 2、this.$refa.ref属性值.js方法名() this.$refs.txt.focus()
      let arr1 = this.$refs.tree.getCheckedKeys()
      // 获取半选的id的数据 arr2
      let arr2 = this.$refs.tree.getHalfCheckedKeys()
      // arr = arr1 + arr2
      // arr1.concat(arr2)
      // Es6 展开运算符 ...数组或者对象
      let arr = [...arr1, ...arr2]
      console.log(arr);

      const res = await this.$http.post(`roles/${this.currRoleId}/rights`,
      {rids:arr.join(',')})
      // 更新视图
      this.getRolelist()
      // 关闭对话框
      this.dialogFormVisibleRight = false
    },
    // 展示权限列表
    async getRolelist () {
      const res = await this.$http.get('roles')
      console.log(res)
      this.rolelist = res.data.data
    },
    // 取消权限
    async deleRole (role, rightId) {
      // roles/:roleId/rights/:rightId
      // roleId 当前角色的id
      // rightId 要删除的权限id
      const res = await this.$http.delete(`roles/${role.id}/rights/${rightId}`)
      console.log(res)
      // 删除成功 返回了200的状态码和该角色的剩余权限
      // 删除成功 更新视图
      role.children = res.data.data
      // this.getRolelist()
    },
    // 分配权限 - 打开对话框
    async showSetRightDia (role) {
      // 给currRoleId赋值
      this.currRoleId = role.id
      // 获取树形结构的权限数据
      const res = await this.$http.get('rights/tree')
      console.log(res)
      this.treelist = res.data.data

        // :default-expanded-keys="arrexpand"
     /* var arrtemp1 = []
      this.treelist.forEach(item1 => {
        arrtemp1.push(item1.id)
        item1.children.forEach(item2 => {
          arrtemp1.push(item2.id)
          item2.children.forEach(item3 => {
            arrtemp1.push(item3.id)
          })
        })
      });
      this.arrexpand = arrtemp1
      */

    //  获取当前角色role 的权限id
      let arrtemp2 = []
      role.children.forEach(item1 => {
        arrtemp2.push(item1.id)
        item1.children.forEach(item2 => {
          arrtemp2.push(item2.id)
          item2.children.forEach(item3 => {
            arrtemp2.push(item3.id)
          })
        })
      });
      this.arrcheck = arrtemp2

      this.dialogFormVisibleRight = true
    }
  }
}
</script>

<style>
.roleslist{
    margin: 5px 0 0 5px;
}
</style>

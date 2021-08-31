<template>
    <el-card class="box-cad">
        <my-bread level1="商品管理" level2="商品列表"></my-bread>

        <!-- 搜索框 -->
       <el-row class="searchArea">
           <el-col :span="24">
               <el-input v-model="searchValue" class="searchInput" clearable placeholder="请输入内容">
                   <el-button slot="append" icon="el-icon-search"></el-button>
               </el-input>
               <el-button type="success" plain>添加商品</el-button>
           </el-col>
       </el-row>

        <!-- 表格 -->

    </el-card>
</template>

<script>
import myBread from '../cuscom/myBread.vue';
export default {
  components: { myBread },

    data() {
        return {
            searchValue:'',

        };
    },

    methods: {
        
    },
};
</script>

<style scoped>
.searchArea {
  margin-top: 10px;
  margin-bottom: 10px;
}
.searchArea .searchInput {
  width: 350px;
}
</style>
<template>
    <el-card class="box-cad">
        <my-bread level1="商品管理" level2="商品列表"></my-bread>

        <!-- 搜索框 -->
       <el-row class="searchArea">
           <el-col :span="24">
               <el-input v-model="searchValue" class="searchInput" clearable placeholder="请输入内容"></el-input>
           </el-col>
       </el-row>


    </el-card>
</template>

<script>
import myBread from '../cuscom/myBread.vue';
export default {
  components: { myBread },

    data() {
        return {
            
        };
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>
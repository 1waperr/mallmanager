<template>
    <el-card class="box-cad">
        <my-bread level1="商品管理" level2="商品列表"></my-bread>

        <!-- 搜索框 -->
        <el-button slot="append" icon="el-icon-search"></el-button>


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
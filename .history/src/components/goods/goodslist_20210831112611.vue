<template>
  <el-card class="box-cad">
    <my-bread level1="商品管理" level2="商品列表"></my-bread>

    <!-- 搜索框 -->
    <el-row class="searchArea">
      <el-col :span="24">
        <el-input
          v-model="searchValue"
          class="searchInput"
          clearable
          placeholder="请输入内容"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success" plain>添加商品</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table
      height="450px"
      border
      stripe
      v-loading="loading"
      :data="list"
      style="width: 100%"
    >
      <!-- 序号 -->
      <el-table-column type="index"> </el-table-column>

      <el-table-column prop="goods_name" label="商品名称"> </el-table-column>

      <el-table-column prop="goods_price" label="商品价格(元)" width="100">
      </el-table-column>

      <el-table-column prop="goods_weight" label="商品重量" width="80">
      </el-table-column>

      <el-table-column label="创建日期" width="120"> </el-table-column>

      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            v-if="scope"
            plain
            size="mini"
            type="primary"
            icon="el-icon-edit"
            circle
          ></el-button>
          <el-button
            v-if="scope"
            plain
            size="mini"
            type="danger"
            icon="el-icon-delete"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
  </el-card>
</template>

<script>
import myBread from "../cuscom/myBread.vue";
export default {
  components: { myBread },

  data() {
    return {
      searchValue: "",
      loading: false,
      list: [],
    };
  },

  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.pagesize = val;
      this.pagenum = 1;
      this.loadData();
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.pagenum = val;
      this.loadData();
    },
    handleSearch() {},
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
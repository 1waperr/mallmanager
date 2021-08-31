<template>
  <el-card>
    <my-bread level1="商品管理" level2="商品列表"></my-bread>
    <!-- 提示 -->
    <el-alert class="alert" title="添加商品信息" type="success" center show-icon>
    </el-alert>

  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.alert{
    margin-top: 20px;
}
</style>
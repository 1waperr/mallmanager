<template>
  <el-card>
    <my-bread level1="商品管理" level2="商品列表"></my-bread>
    <!-- 提示 -->
    <el-alert class="alert" title="添加商品信息" type="success" center show-icon>
    </el-alert>
    <!-- 步骤条 -->
    <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
  <el-step title="步骤 1" ></el-step>
  <el-step title="步骤 2" ></el-step>
  <el-step title="步骤 3" ></el-step>
  <el-step title="步骤 2" ></el-step>
  <el-step title="步骤 3" ></el-step>
</el-steps>

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
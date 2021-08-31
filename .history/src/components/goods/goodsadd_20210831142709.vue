<template>
  <el-card>
    <my-bread level1="商品管理" level2="商品列表"></my-bread>
    <!-- 提示 -->
    <el-alert
      class="alert"
      title="添加商品信息"
      type="success"
      center
      show-icon
    >
    </el-alert>
    <!-- 步骤条 -->
    <!-- 
        :active="abc"
        "abc"的值为1 表示当前是第一步
     -->
    <el-steps
      :active="1"
      finish-status="success"
      simple
      style="margin-top: 20px"
    >
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
    </el-steps>
    
    <el-tabs v-model="active" tab-position="left" style="height: 200px;margin-top:20px">
    <el-tab-pane name="1" label="基本信息">基本信息</el-tab-pane>
    <el-tab-pane label="商品参数">商品参数</el-tab-pane>
    <el-tab-pane label="商品属性">商品属性</el-tab-pane>
    <el-tab-pane label="商品图片">商品图片</el-tab-pane>
    <el-tab-pane label="商品内容">商品内容</el-tab-pane>
  </el-tabs>
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
.alert {
  margin-top: 20px;
}
</style>
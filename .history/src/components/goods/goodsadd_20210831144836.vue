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
      :active="1 * active"
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
    <!-- 表单元素 v-model="active"
     如果选中的第二个el-tab-pane 此时 active的值就是该tab的name值 也就是2

     联动效果
     让el-steps步骤条的 :active属性的值和v-model绑定的属性 是同一个
     -->
    <!-- 最外层是el-form -->
    <el-form label-position="top" label-width="80px" :model="from">
      <el-tabs
        v-model="active"
        tab-position="left"
        style="height: 200px; margin-top: 20px"
      >
        <el-tab-pane name="1" label="基本信息">
          <el-form-item label="商品名称">
            <el-input v-model="form.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="form.goods_price"></el-input>
          </el-form-item>
          <el-form-item label="商品重量">
            <el-input v-model="form.goods_weight"></el-input>
          </el-form-item>
          <el-form-item label="商品数量">
            <el-input v-model="form.goods_number"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane name="2" label="商品参数"> </el-tab-pane>
        <el-tab-pane name="3" label="商品属性"> </el-tab-pane>
        <el-tab-pane name="4" label="商品图片"> </el-tab-pane>
        <el-tab-pane name="5" label="商品内容"> </el-tab-pane>
      </el-tabs>
    </el-form>

    <!-- 
  <el-form-item label="名称">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
   -->
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
      //   添加商品的表单数据
      form: {
        goods_name: "",
        goods_price: "",
        goods_number: "",
        goods_weight: "",
        // 分类id
        goods_cat: "",
        pics: [],
        goods_introduce: "",
        attrs: "",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.alert {
  margin-top: 20px;
}
</style>
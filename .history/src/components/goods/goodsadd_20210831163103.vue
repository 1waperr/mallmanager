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
    <el-form
      label-position="top"
      label-width="80px"
      :model="form"
      style="height: 400px; overflow: auto"
    >
      <el-tabs
        @tab-click="tabChange()"
        v-model="active"
        tab-position="left"
        style="margin-top: 20px"
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
          <el-form-item label="商品分类">
            <!-- 级联选择器 -->
            <el-cascader
              clearable
              expand-trigger="hover"
              :options="options"
              v-model="selectedOptions"
              :props="defaultProp"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane name="2" label="商品参数">
          <el-form-item
            :label="item1.attr_name"
            v-for="(item1, i) in arrDyparams"
            :key="i"
          >
            <!-- 复选框组 全选中： v-model="item1.attr_vals" -->
            <el-checkbox-group v-model="item1.attr_vals">
              <el-checkbox
                v-for="(item2, i) in item1.attr_vals"
                :key="i"
                :label="item2"
                border
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane name="3" label="商品属性">
          <!-- 静态参数的数据 -->
          <el-form-item
            v-for="item in staticParams"
            :key="item.attr_id"
            :label="item.attr_name"
          >
            <el-input v-model="item.attr_vals"></el-input>
          </el-form-item>
        </el-tab-pane>
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
      //级联选择器绑定的数据
      options: [],
      //最终选择的label值对应的value值会在selectedOptions数组中
      selectedOptions: [],
      defaultProp: {
        label: "cat_name",
        value: "cat_id",
        children: "children",
      },
      // 动态参数的数据数组
      arrDyparams: [],
      // 静态参数的数据数组
      arrStaticparams: [],
    };
  },
  created() {
    this.getGoodCate();
  },
  methods: {
    //   点击不同的tab时
    async tabChange() {
      // 如果点击的是第二个tab 提示 三级分类要有值
      if (this.active === "2") {
        if (this.selectedOptions.length !== 3) {
          // 提示
          this.$message.error("请先选择商品的三级分类");
          return;
        }
        // 获取数据
        const res = await this.$http.get(
          `categories/${this.selectedOptions[2]}/attributes?sel=many`
        );
        console.log(res);
        this.arrDyparams = res.data.data;
        //  this.arrDyparams 每个对象.attr_vals字符串--数组--v-for
        this.arrDyparams.forEach((item) => {
          // 并不是所有的三级分类都有动态参数 -- "" -- v-for会报错
          // item.attr_vals = item.attr_vals.trim().split(',')
          item.attr_vals =
            item.attr_vals.length === 0 ? [] : item.attr_vals.trim().split(",");
        });
      } else if (this.active === "3") {
        if (this.selectedOptions.length !== 3) {
          // 提示
          this.$message.error("请先选择商品的三级分类");
          return;
        }
        //   获取静态参数的数据
        const res = await this.$http.get(
          `categories/${this.selectedOptions[2]}/attributes?sel=only`
        );
        this.arrStaticparams = res.data.data;
      }
    },
    //   级联选择器 选择改变时触发的方法
    handleChange(value) {
      console.log(value);
    },
    // 获取三级分类的信息
    async getGoodCate() {
      const res = await this.$http.get(`categories?type=3`);
      console.log(res);
      this.options = res.data.data;
    },
  },
};
</script>

<style scoped>
.alert {
  margin-top: 20px;
}
</style>
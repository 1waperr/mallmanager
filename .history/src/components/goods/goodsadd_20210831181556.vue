<template>
  <el-card class="newstyle">
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
            v-for="item in arrStaticparams"
            :key="item.attr_id"
            :label="item.attr_name"
          >
            <el-input v-model="item.attr_vals"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane name="4" label="商品图片">
          <el-form-item>
            <!-- action 请求的全路径http开头 -->
            <el-upload
              action="http://localhost:8888/api/private/v1/upload"
              :headers="headers"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="handleSuccess"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane name="5" label="商品内容">
          <el-form-item>
            <!-- 表单元素 -->
            <el-button
              @click="addGoods()"
              type="primary"
              style="margin-bpttom: 20px"
              >添加商品</el-button
            >
            <!-- 富文本 -->
            <quill-editor v-model="form.goods_introduce"></quill-editor>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </el-card>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor,
  },
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
        attrs: [],
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
      //   除了登录请求 都需要设置头部
      // 之前的头部设置是给axios发起的请求设置的
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
  },
  created() {
    this.getGoodCate();
  },
  methods: {
    // 添加商品
    async addGoods() {
      this.form.goods_cat = this.selectedOptions.join(",");
      const res = await this.$http.post(`goods`, this.form);
    },
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
    // 图片上传时可能会用到的方法
    // file形参
    handleRemove(file, fileList) {
      // file.response.data.tmp_path 图片临时上传的路径
      // findIndex() 遍历 把符合条件的元素的索引进行返回
      let Index = this.form.pics.findIndex((item)=>{
        item.pic === file.response.data.tmp_path
      })
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(file) {
      // tmp_path图片的临时上传路径
      this.form.pics.push({
        pic: file.data.tmp_path,
      });
      console.log(file);
    },
  },
};
</script>

<style scoped>
.alert {
  margin-top: 20px;
}
.newstyle >>> .ql-editor {
  min-height: 200px;
}
</style>
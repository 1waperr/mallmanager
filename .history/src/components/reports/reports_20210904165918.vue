<template>
  <el-card>
    <my-bread level1="数据统计" level2="数据报表"></my-bread>

    <div id="main" style="width: 600px; height: 400px"></div>
  </el-card>
</template>

<script>
import myBread from "../cuscom/myBread.vue";
var myEchart = require("echarts");

export default {
  components: { myBread },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    useEchart() {
      // init
      var myChart = echarts.init(document.getElementById("main"));
      // option
      let optino1 = {
        title: {
          text: "堆叠区域图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },

        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
      };
      // setOption
      
    },
  },
};
</script>

<style scoped>
</style>
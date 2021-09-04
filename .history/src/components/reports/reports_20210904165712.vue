<template>
    <el-card>
        <my-bread level1="数据统计" level2="数据报表"></my-bread>

        <div id="main" style='width: 600px; height: 400px'></div>
    </el-card>
</template>

<script>
import myBread from '../cuscom/myBread.vue';
var myEchart = require("echarts")

export default {
  components: { myBread },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        useEchart(){
            // init
            var myChart = echarts.init(document.getElementById("main"))
            // option

            // setOption
        }
    },
};
</script>

<style scoped>

</style>
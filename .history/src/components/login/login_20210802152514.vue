<template>
  <div>
    <el-form
      :label-position="top"
      label-width="80px"
      :model="formdata"
    >
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata:{
          username:'',
          password:''
      }
      }
  }
}
</script>

<style>
</style>

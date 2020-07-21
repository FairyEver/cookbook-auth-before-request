<template>
  <el-form label-position="right" label-width="100px" v-model="form">
    <el-form-item label="用户名">
      <el-input v-model="form.username"/>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button @click="cancle">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  methods: {
    async login () {
      const result = await this.$api.SYS_USER_LOGIN(this.form)
      console.log(result)
    },
    cancle () {}
  }
}
</script>

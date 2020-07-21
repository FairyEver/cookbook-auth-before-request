<template>
  <div>
    <p v-if="!widget" style="text-align:center">
      <img
        src="https://cdn.d2.pub/files/image-hosting/20200215125724.png"
        style="width:60px;">
    </p>
    <el-form label-position="right" label-width="100px" v-model="form">
      <el-form-item label="用户名">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { save } from '@/utils/cookie-user.js'
export default {
  props: {
    widget: {
      type: Boolean
    }
  },
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
      try {
        const result = await this.$api.SYS_USER_LOGIN(this.form)
        this.$message.success('登录成功')
        save(result)
        if (this.widget) this.$emit('success')
        else this.$router.push({ name: 'index' })
      } catch (error) {}
    },
    cancel () {
      if (this.widget) this.$emit('cancel')
      else this.$router.push({ name: 'index' })
    }
  }
}
</script>

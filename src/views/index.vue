<template>
  <div>
    <p>
      <el-button @click="getTicketList">请求商品列表</el-button>
      <el-button @click="goLogin">前往登录页面</el-button>
      <el-button v-if="isLogged" @click="logout">移除登录状态</el-button>
    </p>
    <el-table
      :data="list"
      stripe
      border
      size="mini"
      style="width: 100%">
      <el-table-column prop="admin" label="Admin" width="100"/>
      <el-table-column prop="key" label="卡号"/>
    </el-table>
  </div>
</template>

<script>
import { remove, getToken } from '@/utils/cookie-user'

export default {
  data () {
    return {
      list: [],
      isLogged: !!getToken()
    }
  },
  methods: {
    async getTicketList () {
      this.list = []
      try {
        const result = await this.$api.TICKET_LIST()
        this.list = result
      } catch (error) {}
      this.refreshIsLogged()
    },
    goLogin () {
      this.$router.push({ name: 'login' })
    },
    logout () {
      remove()
      this.refreshIsLogged()
      this.list = []
    },
    refreshIsLogged () {
      this.isLogged = !!getToken()
    }
  }
}
</script>

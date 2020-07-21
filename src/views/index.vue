<template>
  <div>
    <p>
      <el-button @click="getTicketList">请求商品列表</el-button>
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
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getTicketList () {
      const result = await this.$api.TICKET_LIST()
      this.list = result
    }
  }
}
</script>

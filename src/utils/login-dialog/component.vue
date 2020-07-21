<template>
  <el-dialog
    title="Login"
    width="300px"
    :visible.sync="avtive">
    <login/>
  </el-dialog>
</template>

<script>
import login from '@/components/login.vue'

export default {
  name: 'component-name',
  components: {
    login
  },
  data () {
    return {
      avtive: true
    }
  }
}
</script>

import Vue from 'vue'
import login from '@/components/login.vue'

export function open () {
  return new Promise((resolve, reject) => {
    const Instance = new Vue({
      render (h) {
        return <el-dialog
          title="Login"
          width="400px"
          visible={ this.active }
          onClose={ () => { this.active = false } }
          onClosed={ this.destroy }>
          <login/>
        </el-dialog>
      },
      data () {
        return {
          active: false
        }
      },
      mounted () {
        this.active = true
      },
      methods: {
        destroy () {
          document.body.removeChild(component.$el)
          this.$destroy()
          resolve()
        }
      }
    })
    const component = Instance.$mount()
    document.body.appendChild(component.$el)
  })
}

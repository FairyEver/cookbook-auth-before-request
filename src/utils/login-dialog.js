import Vue from 'vue'

export function open () {
  return new Promise((resolve, reject) => {
    const Instance = new Vue({
      render (h) {
        return <el-dialog
          title="Login"
          width="400px"
          visible={ this.active }
          onClose={ this.onCancel }
          onClosed={ this.destroy }>
          <login
            widget
            onSuccess={ this.onLoginSuccess }
            onCancel={ this.onCancel }/>
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
        },
        onLoginSuccess () {
          resolve()
          this.active = false
        },
        onCancel () {
          this.active = false
          reject(new Error('放弃登录'))
        }
      }
    })
    const component = Instance.$mount()
    document.body.appendChild(component.$el)
  })
}

import Vue from 'vue'
import LoginDialog from './component.vue'

function makeInstance () {
  const Instance = new Vue({
    render (h) {
      return <LoginDialog/>
    }
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
}

export const open = makeInstance

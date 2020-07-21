import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import pluginApi from '@/plugin/api'

import login from '@/components/login.vue'

Vue.use(ElementUI)
Vue.use(pluginApi)

Vue.component('login', login)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

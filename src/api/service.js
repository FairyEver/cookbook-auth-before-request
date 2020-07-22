import { get, set } from 'lodash-es'
import axios from 'axios'
import Adapter from 'axios-mock-adapter'
import { Message } from 'element-ui'
import login from '@/utils/login-dialog'
import { getToken } from '@/utils/cookie-user'

function createService () {
  // 创建一个 axios 实例
  const service = axios.create()
  service.interceptors.request.use(
    async config => {
      const ignoreAuth = get(config, 'headers.auth') === false
      const isLogged = !!getToken()
      if (!ignoreAuth && !isLogged) {
        await login()
      }
      set(config, 'headers.token', getToken())
      return config
    },
    error => Promise.reject(error)
  )
  service.interceptors.response.use(
    response => {
      const code = response.data.code
      if (code !== 0) {
        Message.error(response.data.msg)
        return Promise.reject(new Error(response.data.msg))
      }
      return response.data.data
    },
    error => Promise.reject(error)
  )
  return service
}

export const service = createService()

export const mock = new Adapter(service)

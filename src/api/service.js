import axios from 'axios'
import Adapter from 'axios-mock-adapter'
import { open } from '@/utils/login-dialog'

// function wait (time) {
//   return new Promise(resolve => {
//     setTimeout(resolve, time)
//   })
// }

function createService () {
  // 创建一个 axios 实例
  const service = axios.create()
  service.interceptors.request.use(
    async config => {
      await open()
      return config
    },
    error => Promise.reject(error)
  )
  service.interceptors.response.use(
    response => {
      const code = response.data.code
      console.log(code)
      return response.data.data
    },
    error => Promise.reject(error)
  )
  return service
}

export const service = createService()

export const mock = new Adapter(service)

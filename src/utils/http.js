import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user.js'
import router from '@/router'
const httpInstance = axios.create({
  //baseURL: '/api',  // 修改这里
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 10000
})
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))
// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  // 统一错误提示
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  if(e.response.status === 401) {
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})
export default httpInstance

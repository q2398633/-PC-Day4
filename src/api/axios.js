// 封装axios
import axios from 'axios'

// 创建一个axios对象 使用 {} 的配置项
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // config请求配置对象
  // 修改config
  const user = window.sessionStorage.getItem('jiue04')
  if (user) {
    config.headers = {
      Authorization: 'Bearer' + JSON.parse(user).token
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  return response
}, (error) => {
  // 做自己的事情,错误的时候
  // 如果响应状态码是 401, 拦截到登录页面
  // error.response.status 状态码
  if (error.response.status === 401) {
    // hash 是location提供获取操作 地址栏的#后的地址的属性
    location.hash = '#/login'
  }
  return Promise.reject(error)
})

export default instance

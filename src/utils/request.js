import axios from 'axios'
import qs from 'query-string'

const instance = axios.create({
  timeout: 5000
})

const errorHandle = (status, other) => {
  switch (status) {
    case 400:
      // 请求头和服务器的限制
      console.log('服务器不理解请求的语法');
      break;
    case 401:
      // token验证失败，用户身份验证失败
      console.log('（未授权）请求要求身份验证');
      break;
    case 403:
      // 用户身份过期，服务器请求限制
      console.log('（禁止）服务器拒绝请求');
      break;
    case 404:
      // 网络请求地址错误
      console.log('（禁止）服务器拒绝请求');
      break;

    default:
      console.log(other);
      break;
  }
}

instance.defaults.baseURL = '';
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
instance.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
  return response.status === 200 ? Promise.resolve(response) : Promise.reject(error)
}, error => {
  const {response} = error
  if(response){
    errorHandle(response.status, response.data)
    return Promise.reject(response);
  }else{
    console.log('请求中断或者断网了');
  }
});

export default instance

import axios from 'axios'
import { useUserToken } from '@/stores/token'

// 创建 axios 对象
const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL, // 根路径
    timeout: 300000 // 网络延时
})


// 添加请求拦截器 => 前端给后端的参数【还没到后端响应】
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 在其他组件中获取 token
    const token = useUserToken().usertoken;
    if(token){
        config.headers['Q-token'] = token;
    }
    if (config.method === 'get') {
        config.headers['Content-Type'] = 'application/json'; // 设置GET请求的Content-Type
    } else if (config.method === 'post') {
        if(!config.headers['Content-Type']){
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'; // 设置POST请求的Content-Type
        }
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器 => 后端给前端的数据【后端返回给前端的东西】
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    console.error('响应错误：', error);
    return Promise.reject(error);
});

// 最终返回的对象
export default instance
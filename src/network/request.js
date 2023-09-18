import axios from 'axios'


export function request(config){
    const instance = axios.create({
        baseURL : 'http://123.207.32.32:8000',
        timeout : 1000
    })

    // 2.axiox的拦截器
    instance.interceptors.request.use(config => {
        console.log(config)
        return config
    },err => {
        console.log(err);
    })

    // 3.发送真正的网络请求,这里返回的是一个promise
    return instance(config)

}
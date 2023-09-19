/* eslint-disable no-undef */
// 对首页进行分装，请求
import { request } from "./request";
export function getHomeMultidata(){
    return request({
        url : '/home/multidata'
    })
}


export function getHomeGoods(type,page){
    return request({
        url: "/home/data",
        params : {
            type,
            page
        }
    })
}
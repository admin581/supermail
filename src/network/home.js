// 对首页进行分装，请求
import { request } from "./request";
export function getHomeMultidata(){
    return request({
        url : '/home/multidata'
    })
}
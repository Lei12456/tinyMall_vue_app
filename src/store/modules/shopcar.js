import {get,post_json,post} from '@/http/axios'
import _ from 'lodash'
export default {
    namespaced:true,
    state: {
        orderLine:new Map()
    },
    getters:{
        // 对于state中的orderLine进行处理，计算总额
        total(state){
            let result = 0;
            // state.orderLine.values() 表示map集合值的遍历器对象
            for(let item of state.orderLine.values()){
                /*item是{
                    productId:val.id,
                    productName:val.name,
                    price:val.price,
                    number:val.number
                }*/
                result += item.price*item.number 
            }
            return result;
        }
    },
    mutations: {
        addShopCar(state,orderLine){
            // 将接收到的参数设置到map集合中
            state.orderLine.set(orderLine.productId,orderLine)
            // 改变orderLine的引用地址，为了让vue监听到
            state.orderLine = _.clone(state.orderLine)
        }
    }
}
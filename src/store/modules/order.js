import {post_obj_array,get} from '@/http/axios'
import _ from 'lodash'
export default {
    namespaced:true,
    state: {
        orders:[]
    },
    getters:{
        // 根据订单状态进行分类过滤
        ordersStatusFilter(state) {
            return (status) => {
                return state.orders.filter(order => order.status === status)
            }
        }
    },
    mutations: {
        refreshOrder(state,orders){
            state.orders = orders
        }
    },
    actions:{
        // 根据顾客id查询所有订单
        async findOrderByCustomerId(context,customerId){
            let res = await get('/order/query',{customerId})
            context.commit('refreshOrder',res.data)
        },
        // 保存订单
        async saveOrder(context,params){
            let res = await post_obj_array('/order/save',params)
            return res
        }
    }
}
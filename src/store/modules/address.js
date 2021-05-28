import {get,post_json,post} from '@/http/axios'

export default {
  namespaced:true,
  state: {
    addresses:[]
  },
  
  mutations: {
    refreshAddress(state,addresses){
        state.addresses = addresses
    }
  },
  actions: {
    // 根据顾客id查询地址
    async findAddressById(context,id){
        let res = await get('/address/findByCustomerId',{id})
        context.commit('refreshAddress',res.data)
    },
    // 保存地址
    async saveAddress(context,params){
      let res = await post('/address/saveOrUpdate',params)
      return res
    },
  }
}
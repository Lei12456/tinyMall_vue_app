import {get,post_json,post} from '@/http/axios'

export default {
  namespaced:true,
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    async getVcode(context,params){
        let res = await get('/customer/getVerCode',{telephone:params})
        return res
    }
  }
}
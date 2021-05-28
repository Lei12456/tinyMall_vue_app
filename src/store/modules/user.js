import {get,post_json,post} from '@/http/axios'

export default {
  namespaced:true,
  state: {
    info:{} //用户信息
  },
  mutations: {
    refreshInfo(state,info){
      state.info = info;
    },
  },
  actions: {
    // 登录
    async login(context,params){
      // 1.登录
      let response = await post("/customer/login",params);
      let info = response.data.result;
      context.commit('refreshInfo',info);
      return response;
    },
    // 退出
    async logout(context){
      // 1. 请求后台退出
      await post('/user/logout');
      // 2. 清理本地缓存
      localStorage.removeItem("token")
      // 3. 清理store
      context.commit('refreshInfo',{});
    }
  }
}
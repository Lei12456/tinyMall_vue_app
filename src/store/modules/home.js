import {get,post_json,post} from '@/http/axios'

export default {
  namespaced:true,
  state: {
    allProduct:[],
    allCategory:[],
    product:[]
  },
  getters:{
    //   筛选出所有产品中的图片
      newAllProduct(state){
          let res = state.allProduct.map((item)=>{
              return item.photo
          })
          return res
      }
  },
  mutations: {
    refreshAllProduct(state,allProduct){
        state.allProduct = allProduct
    },
    refreshAllCategory(state,allCategory){
        state.allCategory = allCategory
    },
    refreshProduct(state,product){
        state.product = product
    }
  },
  actions: {
    // 根据栏目id查询产品
    async findProductById({commit},id){
        let res = await get('/product/findByCategoryId',{id})
        commit('refreshProduct',res.data)
    },
    // 查询所有栏目
    async findAllCategory({commit}){
        let res = await get('/category/findAll')
        commit('refreshAllCategory',res.data)
    },
    // 查询所有产品
    async findAllProduct({commit}){
        let res = await get('/product/findAll')
        commit('refreshAllProduct',res.data)
    },
    // 等价于
    // async findAllProduct(context){
    //     let res = await get('/product/findAll')
    //     context.commit('refreshAllProduct',res.data)
    // }
  }
}
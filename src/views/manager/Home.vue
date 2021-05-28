<template>
  <div class="home">
    <!-- 轮播图片 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in newAllProduct" :key="index">
        <img v-lazy="item" />
      </van-swipe-item>
    </van-swipe>
    <!-- 所有栏目(分类) -->
    <van-grid :border="false" :column-num="3">
      <!-- 通过v-show和索引结合的方式，规定显示的个数 -->
      <van-grid-item @click="toProductHandler(item.id,index)" v-for="(item,index) in allCategory" :key="item.id" v-show='index<5'>
        <van-image :src="item.icon" />
        <div>{{item.name}}</div>
      </van-grid-item>

      <van-grid-item>
        <van-grid-item @click='loadMore' icon="photo-o" text="加载更多" />
      </van-grid-item>
    </van-grid>

    <!-- 所有的产品 -->
    <van-grid :border="false" :column-num="1" :center='false'>
      <van-grid-item v-for="item in allProduct" :key="item.id">
        <!-- 实现左右布局 -->
        <van-row>
          <van-col span="8">
            <van-image :src="item.photo" />
          </van-col>
          <van-col span="16">
            <div>商品名：{{item.name}}</div>
            <div>单价：￥{{item.price}}</div>
            <div>描述：{{item.description}}</div>
          </van-col>
        </van-row>

      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState('home',['allProduct','allCategory']),
    ...mapGetters('home',['newAllProduct'])
  },
  created(){
    // 加载所有产品
    this.findAllProduct()
    // 加载所有栏目
    this.findAllCategory()
  },
  methods:{
    ...mapActions('home',['findAllProduct','findAllCategory']),
    // 跳转至产品页面 -- 加载更多
    loadMore(){
      this.$router.push({
        path:'/manager/product'
      })
    },
    // 跳转至产品页面
    toProductHandler(id,index){
      // id为当前点击的栏目id，index为当前点击栏目的索引
      this.$router.push({
        path:'/manager/product',
        query:{
          id,
          index
        }
      })
    }
  },
}
</script>
<style scoped>

</style>
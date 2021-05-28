<template>
  <div class="manager">
    <!-- 路由出口，用于接受管理页面，首页，订单页，我的页面 -->
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/manager/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/manager/order">订单</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/manager/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  
}
</script>
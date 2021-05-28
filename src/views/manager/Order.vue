<template>
  <div class="order">
    <van-tabs>
      <van-tab title="全部订单">
        <briup-order-item v-for='item in orders' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
      <van-tab title="待支付">
        <briup-order-item v-for='item in ordersStatusFilter("待支付")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
      <van-tab title="待服务">
        <briup-order-item v-for='item in ordersStatusFilter("待服务")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
      <van-tab title="待评价">
        <briup-order-item v-for='item in ordersStatusFilter("待评价")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
      <van-tab title="已完成">
        <briup-order-item v-for='item in ordersStatusFilter("已完成")' :key='item.id' :data='item'></briup-order-item>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return {
      active:1
    }
  },
  computed:{
    ...mapState('user',['info']),
    ...mapState('order',['orders']),
    ...mapGetters('order',['ordersStatusFilter']),
  },
  created(){
    this.findOrderByCustomerId(this.info.id)
  },
  methods:{
    ...mapActions('order',['findOrderByCustomerId'])
  }
}
</script>
<style scoped>

</style>
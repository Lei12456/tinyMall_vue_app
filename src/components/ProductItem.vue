<template>
  <div class="product_item">
    <van-row>
      <van-col :span="4">
        <img v-if="data.photo" :src="data.photo" alt="">
        <img v-else src="../assets/service.png" alt="">
      </van-col>
      <van-col :offset="1" :span="19">
        <div> <strong>名称：</strong> {{data.name}}</div>
        <div> <strong>价格：</strong> {{data.price}}</div>
        <div> <strong>描述：</strong> {{data.description}}</div>
        <!-- 由于加上了v-model，所以步进器的默认值就不生效了，所以需要手动设置 -->
        <div> <van-stepper v-model="data.number" :default-value='0' :min="0" @change="numberChangeHandler(data)"/> </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props:['data'],
  data(){
    return {
      value:0
    }
  },
  methods:{
    ...mapMutations('shopcar',['addShopCar']),
    // 步进器改变时触发
    numberChangeHandler(val){
      // 参数封装
      let orderLine = {
        productId:val.id,
        productName:val.name,
        price:val.price,
        number:val.number
      }
      // 调用购物车方法
      this.addShopCar(orderLine);
    }
  }
}
</script>
<style scoped>
.product_item {
  margin:.5em 1em;
  padding: .5em;
  border-radius: 5px;
  border: 1px dotted #ccc;
}

.product_item img {
  width: 100%;
  border-radius: 3px;
}

</style>
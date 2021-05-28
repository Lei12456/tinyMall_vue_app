<template>
  <div class="user">
    <div class="header">
      <div class="photo">
        <img src="../../assets/user.png" alt=""/>
      </div>
      <div class="name">{{info.name}}</div>
    </div>
    <div class="line" @click="toAddressHandler">
      新增地址
    </div>
    <div class="line" @click="logoutHandler">
      退出
    </div>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions('user',['logout']),
    // 跳转到地址新增页面
    toAddressHandler(){
      this.$router.push({
        path:'/manager/address_add'
      })
    },
    logoutHandler(){
      this.logout()
      .then(()=>{
        this.$router.push({path:'/login'})
      })
    }
  },
  computed:{
    ...mapState("user",["info"])
  }
}
</script>

<style scoped>
.header {
  padding-top: 46px;
  text-align: center;
}

.header .photo {
  margin: 0 auto;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  box-sizing: border-box;
  border:1px solid #eedded;
  overflow:hidden;
  padding: 1em;
}
.header .name {
  line-height: 3em;
  font-size: 16px;
}
.header .photo img {
 width: 100%;
}
.line {
  line-height: 4em;
  border-bottom: 1px solid #ededed;
  padding-left: 4em;
}
</style>
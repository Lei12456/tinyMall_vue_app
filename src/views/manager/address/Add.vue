<template>
    <div class="add">
        <briup-fulllayout title='新增地址'>
            <van-field v-model="address_form.telephone" label="手机号" placeholder="请输入手机号" />
            <van-field @click='showPopup' v-model="address_form.showAddress" label="地址" placeholder="请选择" is-link/>
            
            <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" >
                <van-area title="标题" :area-list="areaList" value="110101" @confirm='choiceAddress'/>
            </van-popup>

            <van-field v-model="address_form.address" label="详细地址" placeholder="请输入详细地址" />

            <van-button type="primary" block @click='saveAddressHandler'>保存地址</van-button>            
        </briup-fulllayout>
    </div>
</template>

<script>
import areaList from '@/assets/areaList'
import {mapState,mapActions} from 'vuex'
import {Toast} from 'vant'
export default {
    data(){
        return {
            address_form:{},
            areaList,
            show:false
        }
    },
    computed:{
        ...mapState('user',['info'])
    },
    methods:{
        ...mapActions('address',['saveAddress']),
        // 保存地址
        saveAddressHandler(){
            // 封装顾客id参数
            this.address_form.customerId = this.info.id
            this.saveAddress(this.address_form).then((res)=>{
                Toast(res.statusText)
                this.$router.push({
                    path:'/manager/user'
                })
            })
        },
        // 确认选择地址
        choiceAddress(val){
            // 拼接省市区，用来显示
            this.address_form.showAddress = val[0].name + ' ' + val[1].name + ' ' + val[2].name
            // 封装后台接口所需参数
            this.address_form.province = val[0].name
            this.address_form.city = val[1].name
            this.address_form.area = val[2].name
            // 关闭模态框
            this.show = false;
        },
        // 显示地址选择模态框
        showPopup(){
            this.show = true;
        }
    }
}
</script>
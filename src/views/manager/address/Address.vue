<template>
    <div class="address">
        <briup-fulllayout title='地址列表'>
            <briup-address-item v-for='item in addresses' :key='item.id' :data='item'></briup-address-item>
        </briup-fulllayout>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState('user',['info']),
        ...mapState('address',['addresses']),
    },
    created(){
        this.findAddressById(this.info.id)
    },
    methods:{
        ...mapActions('address',['findAddressById']),
        
    }
}
</script>
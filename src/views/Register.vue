<template>
    <div class="register">
        <van-cell-group>
            <van-field
                v-model="form.telephone"
                required
                clearable
                label="手机号"
                icon="question-o"
                placeholder="请输入手机号"
            />
            <van-field
                v-model="form.vcode"
                type="password"
                label="验证码"
                placeholder="请输入验证码"
                required
            >
                <template #button>
                    <van-button @click='getVcodeHandler' size="small" type="primary">发送验证码</van-button>
                </template>
            </van-field>
            <van-field
                v-model="form.password"
                required
                clearable
                label="密码"
                icon="question-o"
                placeholder="请输入密码"
            />
        </van-cell-group>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            form:{}
        }
    },
    methods:{
        ...mapActions('register',['getVcode']),
        // 获取验证码
        getVcodeHandler(){
            this.getVcode(this.form.telephone).then((res)=>{
                console.log(res)
            })
        }
    }
}
</script>
<template>
    <div class="landing">
        <img class="bg" :src="state ? signBg :winBg" alt="">
        <div class="main">
            <div v-if="state" class="inputBox">
                <div class="item">
                    <img src="../../assets/img/share-shoji@2x.png" alt="">
                    <input type="text" v-model="phone" placeholder="请输入手机号码">
                </div>
                <div class="item">
                    <img src="../../assets/img/share-mima@2x.png" alt="">
                    <input type="text" v-model="code" placeholder="请输入验证码">
                    <button class="code" @click="getCode" :class="{codeAct:codeBtn!=='获取验证码'}" type="button" :disabled="disabled">{{ codeBtn }}</button>
                </div>
                <div class="rule">
                    <img src="../../assets/img/share-mima@2x.png" alt="">
                    <p>我同意&nbsp;<span>《用户服务协议》</span></p>
                </div>
                <div class="signBtn" @click="signIn">注册领佣金</div>
            </div>
            <div v-else>
                <div class="signWin">恭喜您注册成功<br/>快下载app一起赚佣金</div>
                <div class="signBtn" @click="signIn">注册领佣金</div>
            </div>
            <p class="notice">您的好友{{ friendPhone }}邀您加入卡呗生活</p>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
    export default {
        name: "landing",
        data(){
            return{
                phone: '',//手机号
                code: '',//验证码
                codeBtn: '获取验证码',//获取验证码btn
                disabled: false,
                time: 0,
                friendPhone: '158****1797',//好友手机号
                state: true,
                winBg: require('../../assets/img/share-landing-win.png'),
                signBg: require('../../assets/img/share-landing.png'),
            }
        },
        methods:{
            //注册
            signIn(){
                if(this.phone==''){
                    Toast("请输入手机号");
                    return false;
                }
                if(!reg.test(this.phone)){
                    Toast("请输入正确的手机号");
                    return false;
                }
                if(this.code==''){
                    Toast("请输入验证码");
                    return false;
                }
            },
            //获取验证码
            getCode:function(){
                this.time=60;
                this.disabled=true;
                this.timer();
            },
            //封装一个函数，获取验证码部分：60s 或 重新发送
            timer:function (){
                if (this.time > 0) {
                    this.time --;
                    this.codeBtn = this.time+"s";
                    setTimeout(this.timer,1000);
                } else{
                    this.time = 0;
                    this.codeBtn = "获取验证码";
                    this.disabled = false;
                }
            },
        }
    }
</script>

<style scoped lang="sass">
    .landing
        width: 100%
        height: auto
        position: relative
        .bg
            width: 100%
        .main
            width: 7.06rem
            height: auto
            min-height: 4.54rem
            background: #fff
            border-radius: .15rem
            position: absolute
            top: 4.8rem
            left: 50%
            margin-left: -3.53rem
            padding: .43rem .8rem 0
        .signWin
            font-size: .54rem
            font-family: 'PingFang-SC-Regular'
            text-align: center
            color: #3E3E4D
            line-height: .78rem
            margin: .28rem 0 .42rem
        .inputBox
            .item
                /*width: 5.39rem*/
                height: .86rem
                box-shadow: 0 0 .05rem 0 rgba(153,153,153,0.5)
                border-radius: .10rem
                margin-top: .34rem
                padding-left: .17rem
                display: flex
                align-items: center
                img
                    width: .34rem
                input
                    width: 3.02rem
                    padding-left: .17rem
                    color: #3E3E4D
                    font-size: .26rem
                .code
                    color: #FF8E21
                    width: 1.82rem
                    line-height: .58rem
                    text-align: center
                    font-size: .28rem
                    border-left: .01rem solid #CBCDD7
                    background: #fff
                .codeAct
                    color: #909090
            .rule
                height: .83rem
                font-size: .24rem
                color: #909090
                display: flex
                align-items: center
                justify-content: center
                img
                    width: .2rem
                p
                    margin-left: .13rem
                    span
                        color: #01A1FF
        .signBtn
            line-height: .88rem
            background: linear-gradient(90deg,rgba(255,186,57,1) 0%,rgba(254,135,63,1) 100%)
            box-shadow: 0 .02rem .12rem 0 rgba(255,186,57,0.3)
            border-radius: .44rem
            font-size: .34rem
            font-family: 'PingFang-SC-Regular'
            font-weight: bold
            color: #fff
            text-align: center
        .notice
            color: #FF8E21
            line-height: .91rem
            font-size: .28rem
            font-family: 'PingFang-SC-Regular'
            text-align: center
</style>
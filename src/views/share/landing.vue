<template>
    <div class="landing">
        <!--<img class="bg" src="../../assets/img/share-landing.png" alt="">-->
        <img class="bg" src="../../assets/img/share/shareBJ@2x.png" alt="">
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
                    <img @click="agree =!agree" v-show="!agree" src="../../assets/img/yuan@2x.png" alt="">
                    <img @click="agree =!agree" v-show='agree' src="../../assets/img/yuan_h.png" alt="">
                    <p>我同意&nbsp;<span @click="$router.push('/protocol')">《用户服务协议》</span></p>
                </div>
                <div class="signBtn" @click="signIn">注册领佣金</div>
            </div>
            <div v-else>
                <div class="signWin">{{ winText }}<br/>快下载app一起赚佣金</div>
                <!--<div class="signBtn" @click="downloadAPP">立即下载APP</div>-->
                <div class="downBtn" @click="downloadAPP(0,'http://prod.dianjishenghuo.cn/app/djsh_android.apk')"></div>
                <div class="downBtn1" @click="downloadAPP(1,'https://itunes.apple.com/cn/app/id1462765230')"></div>
            </div>
            <p class="notice">您的好友 {{ friendPhone }} 邀您加入点击生活</p>
        </div>
        <div class="mask" v-show="legal" @touchmove.prevent>
            <div class="noticeBox" v-html="notice">
                {{notice}}
            </div>
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
                legal: false,//展示蒙层【邀请码不合法，true】
                notice: '',//邀请码不合法，提示信息
                agree: true,//是否允许协议
                timestamp: new Date().getTime(),//时间戳
                userId: '',
                mobile: '',//二维码附带手机号
                inviteCode: '',//二维码附带邀请码
                phone: '',//手机号
                code: '',//短信验证码
                codeBtn: '获取验证码',//获取验证码btn
                disabled: false,
                time: 0,
                friendPhone: '',//好友手机号
                state: true,
                winText: '恭喜您注册成功',
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
                if(!this.agree) {
                    Toast("未勾选《用户服务协议》");
                    return false;
                }
                let postData = {
                    "mobile": this.phone,
                    "mobileAuthCode": this.code,
                    "invationCode": this.inviteCode,
                    "deviceType": '3',
                    "timestamp": this.timestamp,
                };
                console.log(postData);
                postData = this.$qs.stringify(postData);
                this.axios.post('/api/user/h5InviteFriendRegister',postData).then(res=>{
                    console.log(res);
                    if(res.data.code==200){
                        Toast('注册成功');
                        this.state = false;
                    }else if(res.data.code==6006){
                        Toast('该账号已注册');
                        this.state = false;
                        this.winText = '您已注册过'
                    }else {
                        Toast(res.data.message);
                    }
                });
            },
            //获取验证码
            getCode:function(){
                if(this.phone==''){
                    Toast("请输入手机号");
                    return false;
                }
                this.time = 60;
                this.disabled=true;
                this.timer();
                let postData = {
                    "mobile": this.phone,
                    "deviceType": '3',
                    "timestamp": this.timestamp,
                };
                console.log(postData);
                postData = this.$qs.stringify(postData);
                console.log(postData);
                this.axios.post('/api/user/smsCodeH5',postData).then(res=>{
                    console.log(res);
                    if(res.data.code==200){
                        Toast('发送成功');
                        this.code = res.data.data;
                    }else {
                        Toast(res.data.message);
                    }
                });
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
            //下载APP
            downloadAPP(num,url){
                if(num){
                    console.log('iosAPP');
                    Toast('APP审核中……')
                    window.location.href = url
                }else {
                    console.log('安卓APP');
                    window.location.href = url
                }

            },
        //    判断商铺是否下架或删除
            isLegal(){
                let postData = {
                    "invationCode": this.inviteCode,
                    "deviceType": '3',
                    "timestamp": this.timestamp,
                };
                console.log(postData);
                postData = this.$qs.stringify(postData);
                this.axios.post('/api/user/InviteFriendForStoreIsGround',postData).then(res=>{
                    console.log(res);
                    if(res.data.code==200){
                        // Toast('注册成功');
                        // this.state = false;
                    }else {
                        this.legal = true;
                        this.notice = '该商铺已下架或已删除' + '<br>'+'无法邀请好友注册';
                        // this.notice = res.data.message + '<br>'+'无法注册';
                    }
                });
            }
        },
        mounted(){
            this.mobile = this.$route.query.mobile;
            this.inviteCode = this.$route.query.code;
            // 判断商铺是否下架或删除
            this.isLegal();
            // 判断手机号是否经过保密处理，而后赋值渲染页面
            if(!reg.test(this.mobile)){
                this.friendPhone = this.mobile;
            }else {
                this.friendPhone = this.mobile.substr(0,3) + "****" + this.mobile.substr(7);
            }


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
        .mask
            width: 100vw
            height: 100vh
            background: rgba(0, 0, 0, 0.6)
            position: fixed
            top: 0
            left: 0
            z-index: 999
            .noticeBox
                width: 4.2rem
                height: 1.6rem
                line-height: .4rem
                padding: 0 .3rem
                background: #fff
                border-radius: .1rem
                font-size: .3rem
                position: absolute
                left: 0
                top: 0
                bottom: 0
                right: 0
                margin: auto
                display: flex
                align-items: center
                justify-content: center
                text-align: center
        .main
            width: 7.06rem
            height: auto
            max-height: 5.46rem
            min-height: 4.54rem
            background: #fff
            border-radius: .15rem
            position: absolute
            top: 6.4rem
            left: 50%
            margin-left: -3.53rem
            padding: .42rem .8rem 0
        .signWin
            font-size: .54rem
            font-family: 'PingFang-SC-Regular'
            text-align: center
            color: #3E3E4D
            line-height: .78rem
            margin: .22rem 0 .4rem
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
            background: linear-gradient(90deg,#DF554E 0%,#BE322F 100%)
            box-shadow: 0 .02rem .12rem 0 rgba(255,186,57,0.3)
            border-radius: .44rem
            font-size: .34rem
            font-family: 'PingFang-SC-Regular'
            font-weight: bold
            color: #fff
            text-align: center
        .downBtn,.downBtn1
            width: 3.84rem
            height: .99rem
            margin: 0 auto
            background: url("../../assets/img/share/shareAZ@2x.png")
            background-size: 100% 100%
        .downBtn1
            background: url("../../assets/img/share/iosPG@2x.png")
            background-size: 100% 100%
        .notice
            color: #FF8E21
            line-height: .91rem
            font-size: .28rem
            font-family: 'PingFang-SC-Regular'
            text-align: center
</style>
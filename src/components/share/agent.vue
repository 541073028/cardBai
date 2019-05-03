<template>
    <div class="common">
        <!--<img src="../../assets/img/invite-agent@2x.jpg" alt="" class="bg">-->
        <img src="../../assets/img/BJ-zhixing.png" alt="" class="bg">
        <div class="rule">活动规则</div>
        <!-- 前期暂注释，后期打开 -->
        <!--<div class="notice">-->
            <!--恭喜{{user}}用户{{phone}}累计获得 <span>{{money}}元</span>邀请奖励-->
        <!--</div>-->
        <div class="btn" v-for="(ele,index) in btnList" :key="index" @click="addEquities()">{{ele.msg}}</div>
        <div class="inviteBtn">
            <div v-for="(item,index) in inviteBtn" :key="index" @click="invite(index)">
                <img :src="item.src" alt="">
                <p>{{item.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "agent",
        data(){
            return{
                user: '**',//notice用户
                phone: '158****1797',//notice手机号
                money: '20',//notice金额
                btnList: [
                    {id:1,msg:'VIP会员198元/年  立即开通',name:'btn1'},
                    {id:2,msg:'立刻成为一级代理商',name:'btn2'},
                    {id:3,msg:'立刻成为城市合伙人',name:'btn3'},
                ],
                inviteBtn: [
                    {id:1,content:'二维码邀请',src: require('../../assets/img/invite_erweima.png')},
                    {id:2,content:'分享邀请',src: require('../../assets/img/invite_fenxiang.png')}
                ],
            }
        },
        methods:{
            //增加权益
            addEquities(){
                upgrade.toPartner("2");
                console.log('成为合伙人');
            },
            //邀请【0-二维码邀请；1-分享邀请】
            invite(i){
                if(i==0) {
                    console.log('二维码邀请');
                    upgrade.byQrcode("2")
                }
                if(i==1){
                    console.log('分享邀请');
                    upgrade.byShare("2")
                }
            }
        }
    }
</script>

<style scoped lang="sass">
 .common
     width: 100%
     height: auto
     position: relative
     top: -.4rem
     left: 0
     .bg
         width: 100%
         height: auto
         position: absolute
         top: 0
         left: 0
     .rule
         width: 1.27rem
         line-height: .41rem
         color: #fff
         font-size: .24rem
         text-align: center
         background: rgba(222,77,70,1)
         border-radius: .21rem 0 0 .21rem
         position: absolute
         right: 0
         top: 1.57rem

     .notice
         width: 6.16rem
         height: .59rem
         line-height: .59rem
         background: rgba(0,0,0,.1)
         font-size: .24rem
         font-family: 'PingFang-SC-Bold'
         border-radius: .3rem
         color: #fff
         position: absolute
         top: 5.75rem
         left: 50%
         margin-left: -3.08rem
         text-align: center
         span
            color: #FFF100
     .btn
         width: 6.06rem
         height: 1rem
         background: url("../../assets/img/invite-anniu@2x.png")
         background-size: 100% 100%
         font-size: .36rem
         font-family: 'PingFang-SC-Heavy'
         font-weight: 800
         color: rgba(108,53,237,1)
         line-height: 1rem
         text-align: center
         position: absolute
         top: 15.55rem
         left: 50%
         margin-left: -3.03rem
     .inviteBtn
         width: 100%
         background: #6C35ED
         padding: .26rem .23rem
         position: fixed
         bottom: 0
         left: 0
         display: flex
         align-items: center
         justify-content: space-around
         div
             width: 3.41rem
             height: 1rem
             background: url("../../assets/img/invite-anniu4@2x.png")
             background-size: 100% 100%
             line-height: 1rem
             font-size: .34rem
             font-family: 'PingFang-SC-Bold'
             font-weight: bold
             color: rgba(62,62,77,1)
             display: flex
             align-items: center
             justify-content: center
             img
                 width: .61rem
                 height: .61rem
                 margin-right: .2rem

</style>
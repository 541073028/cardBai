<template>
    <div class="common">
        <img src="../../assets/img/invite-common@2x.jpg" alt="">
        <div class="notice">
            恭喜{{user}}用户{{phone}}累计获得 <span>{{money}}元</span>邀请奖励
        </div>
    </div>
</template>

<script>
    export default {
        name: "common",
        data(){
            return{
                user: '**',//notice用户
                phone: '158****1797',//notice手机号
                money: '20',//notice金额
            }
        }
    }
</script>

<style scoped lang="sass">
 .common
     width: 7.5rem
     height: auto
     position: relative
     top: -1.28rem
     left: 0
     img
         width: 100%
         height: auto
         position: absolute
         top: 0
         left: 0
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
</style>
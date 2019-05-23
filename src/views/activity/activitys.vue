<template>
    <div class="activitys">
        <img src="../../assets/img/activity/TGs@2x.jpg" alt="" class="bg">
        <div class="btn" @click="whatService()">什么是服务商？</div>
    </div>
</template>

<script>
    export default {
        name: "activitys",
        data(){
            return{

            }
        },
        methods:{
            //增加权益
            whatService(){
                services.toWhat();
                console.log('什么是服务商');
            }
        }
    }
</script>

<style scoped lang="sass">
    .activitys
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
            margin-top: -1.28rem
        .btn
            width: 7.08rem
            height: .98rem
            background: url("../../assets/img/activity/fws@2x.png")
            background-size: 100% 100%
            font-size: .4rem
            font-family: 'PingFang-SC-Heavy'
            font-weight: 800
            color: #C74111
            line-height: .98rem
            text-align: center
            position: absolute
            top: 24.58rem
            left: 50%
            margin-left: -3.54rem

</style>
<template>
    <div id="downApp">
        <div class="content">
            <img class="icon" src="../../assets/img/down/logo@2x.png" alt="">
            <div class="btn">
                <img @click="toDown(0,'http://prod.dianjishenghuo.cn/app/djsh_android.apk')" src="../../assets/img/down/AZ@2x.png" alt="">
                <img @click="toDown(1)" src="../../assets/img/down/PG@2x.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant'
    export default {
        name: "downApp",
        methods:{
            toDown(num,url){
                if(num){
                    console.log("IOS");
                    Toast("APP审核中……")
                }else {
                    console.log("android");
                    window.location.href = url
                }
            }
        }
    }
</script>

<style scoped lang="sass">
    #downApp
        width: 100vw
        height: 100vh
        background: #F8F8F8
        .content
            padding: .01rem
            .icon
                display: block
                width: 1.77rem
                height: 2.15rem
                margin: 2.61rem auto .95rem
            .btn
                display: flex
                align-items: center
                justify-content: center
                margin-right: -.25rem
                img
                    width: 2.8rem
                    height: 1.12rem
                    margin-right: .25rem
</style>
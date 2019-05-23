<template>
    <div id="merchantDown">
        <div class="content">
            <img class="icon" src="../../assets/img/down/logo@2x.png" alt="">
            <div class="btn">
                <img @click="toDown()" src="../../assets/img/merchant/sapp@2x.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant'
    export default {
        name: "merchantDown",
        data(){
            return {
                "isSystem": '',
            }
        },
        methods:{
            toDown(){
                //【0-安卓；1-iOS】
                if(this.isSystem){
                    console.log("IOS");
                    // Toast("APP审核中……")
                    window.location.href = 'https://itunes.apple.com/cn/app/id1462765230'
                }else {
                    console.log("android");
                    window.location.href = 'http://prod.dianjishenghuo.cn/app/djsh_android.apk'
                }
            }
        },
        created(){
            this.isSystem = this.$route.query.isSystem;
        }
    }
</script>

<style scoped lang="sass">
    #merchantDown
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
                justify-content: center
                img
                    width: 2.8rem
                    height: 1.12rem
</style>
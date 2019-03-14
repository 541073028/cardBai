<template>
    <div class="qrCode">
        <div class="title">
            <img src="../../assets/img/invite-fanhui@2x.png" alt="">
            <p>邀请好友</p>
        </div>
        <div class="codeBox">
            <img src="../../assets/img/tupian@2x.png" alt="">
        </div>
        <div class="foot">
            <p>分享到</p>
            <div class="itemBox">
                <div class="item" v-for="(ele,index) in shareList" :key="index" @click="share(index)">
                    <img :src="ele.url" alt="">
                    <span>{{ ele.msg }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "qrCode",
        data(){
            return{
                shareList:[
                    {id:1,msg:'微信好友',url:require('../../assets/img/weixin@2x.png')},
                    {id:2,msg:'朋友圈',url:require('../../assets/img/pengyouquan@2x.png')},
                    {id:3,msg:'保存至相册',url:require('../../assets/img/xiangce@2x.png')},
                ]
            }
        },
        methods:{
            //分享【0-微信好友；1-朋友圈；3-保存至相册】
            share(i){
                if(i==0){
                    console.log('微信好友')
                }
                if(i==1){
                    console.log('朋友圈')
                }
                if(i==2){
                    console.log('保存至相册')
                }
            }
        }
    }
</script>

<style scoped lang="sass">
    .qrCode
        width: 100%
        height: 100%
        overflow: hidden
        .title
            width: 100vw
            height: .88rem
            background: #fff
            font-size: .34rem
            font-family: 'PingFang-SC-Bold'
            font-weight: bold
            color: rgba(62,62,77,1)
            line-height: .88rem
            position: fixed
            top: 0
            left: 0
            text-align: center
            z-index: 99
            img
                width: .45rem
                height: .45rem
                position: absolute
                top: 50%
                left: .4rem
                margin-top: -.225rem
        .codeBox
            width: 100%
            overflow: auto
            background: rgba(0, 0, 0, 0.6)
            position: absolute
            top: .8rem
            bottom: 2.36rem
            _height: 100%
            _border-top: .8rem solid #eee
            _border-bottom: 2.36rem solid #eee
            z-index: 88
            padding: .18rem .2rem
            img
                height: 9.5rem
                width: 6.28rem
                position: absolute
                top: 50%
                left: 50%
                margin-top: -4.75rem
                margin-left: -3.14rem
        .foot
            width: 100%
            height: 2.44rem
            background: #F8F8F8
            position: fixed
            bottom: 0
            left: 0
            text-align: center
            color: #3E3E4D
            border-radius: .1rem .1rem 0 0
            z-index: 99
            p
                font-size: .34rem
                margin-top: .25rem
            .itemBox
                display: flex
                padding: .25rem 1rem .2rem
                .item
                    width: 33.33%
                    font-size: .28rem
                    img
                        width: .77rem
                        height: .77rem
                        display: block
                        margin: 0 auto .17rem
</style>
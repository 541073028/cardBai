<template>
    <div class="invite">
        <div class="title">
            <img src="../../assets/img/invite-fanhui@2x.png" alt="">
            <p>邀请好友</p>
        </div>
        <!--普通common-->
        <common></common>

    </div>
</template>

<script>
    import common from '@/components/invite/common.vue'
    export default {
        name: "invite",
        components: {
            common,
        }
    }
</script>

<style scoped lang="sass">
.invite
    .title
        width: 100%
        //height: .88rem
        background: #fff
        font-size: .34rem
        font-family: 'PingFang-SC-Bold'
        font-weight: bold
        color: rgba(62,62,77,1)
        line-height: .88rem
        position: relative
        text-align: center
        z-index: 99
        img
            width: .45rem
            height: .45rem
            position: absolute
            top: 50%
            left: .4rem
            margin-top: -.225rem

</style>
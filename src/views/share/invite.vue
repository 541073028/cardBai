<template>
    <div class="invite">
        <div class="title">
            <img src="../../assets/img/invite-fanhui@2x.png" alt="">
            <p>邀请好友</p>
        </div>
        <!--普通common-->
        <common v-if="status==='common'" />
        <!--vip-->
        <vipUser v-else-if="status==='vipUser'" />
        <!--代理商-->
        <agent v-else-if="status==='agent'" />
        <!--城市合伙人-->
        <partner v-else-if="status==='partner'" />

    </div>
</template>

<script>
    // 引入的四个组件
    import common from '@/components/share/common.vue';
    import vipUser from '@/components/share/vipUser.vue';
    import agent from '@/components/share/agent.vue';
    import partner from '@/components/share/partner.vue';
    export default {
        name: "invite",
        data(){
            return{
                status: 'common',
            }
        },
        components: {
            common,
            vipUser,
            agent,
            partner,
        }
    }
</script>

<style scoped lang="sass">
.invite
    .title
        width: 100vw
        //height: .88rem
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

</style>
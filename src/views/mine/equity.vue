<template>
    <div class="equity">
        <div class="headImg">
            <img :src="getHeadImg" alt="">
        </div>
        <!--【getType：1--PLUS会员，2--一级代理，3--城市合伙人】-->
        <!--PLUS会员-->
        <div class="content" v-if="getType=='1'">
            <div class="btnBox">
                <h1>PLUS会员 享特权</h1>
                <div class="itemBox">
                    <div class="item" v-for="(ele,i) in vipBtn" :key="i">
                        <img :src="ele.icon" alt="">
                        <p>{{ ele.text }}</p>
                    </div>
                </div>
            </div>
            <div class="cardBox">
                <div class="item"  v-for="(ele,i) in vipCard" :key="i">
                    <img :src="ele.icon" alt="">
                    <div>
                        <p>{{ ele.text }}</p>
                        <span>{{ ele.describe }}</span>
                    </div>

                </div>
            </div>
        </div>
        <!--一级代理-->
        <div class="content" v-else-if="getType=='2'">
            <div class="btnBox">
                <h1>执行服务商 享特权</h1>
                <div class="itemBox">
                    <div class="item" v-for="(ele,i) in agentBtn" :key="i">
                        <img :src="ele.icon" alt="">
                        <p>{{ ele.text }}</p>
                    </div>
                </div>
            </div>
            <div class="cardBox">
                <div class="item"  v-for="(ele,i) in agentCard" :key="i">
                    <img :src="ele.icon" alt="">
                    <div>
                        <p>{{ ele.text }}</p>
                        <span>{{ ele.describe }}</span>
                    </div>

                </div>
            </div>
        </div>
        <!--城市合伙人-->
        <div class="content" v-else-if="getType=='3'">
            <div class="btnBox">
                <h1>区域服务商 享特权</h1>
                <div class="itemBox">
                    <div class="item" v-for="(ele,i) in partnerBtn" :key="i">
                        <img :src="ele.icon" alt="">
                        <p>{{ ele.text }}</p>
                    </div>
                </div>
            </div>
            <div class="cardBox">
                <div class="item"  v-for="(ele,i) in partnerCard" :key="i">
                    <img :src="ele.icon" alt="">
                    <div>
                        <p>{{ ele.text }}</p>
                        <span>{{ ele.describe }}</span>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "equity",
        data(){
            return {
                //PLUS会员列表
                "vipBtn": [
                    {id:1, icon: require('../../assets/img/mine/zigou@2x.png'), text: '自购省钱'},
                    {id:2, icon: require('../../assets/img/mine/yaoqing@2x.png'), text: '邀请收益'},
                    {id:3, icon: require('../../assets/img/mine/shenji@2x.png'), text: '升级奖励'},
                    {id:4, icon: require('../../assets/img/mine/xiaofei@2x.png'), text: '消费反佣'}
                ],
                "vipCard": [
                    {id:1, icon: require('../../assets/img/mine/zigou-big@2x.png'), text: '自购省钱',describe: '消费返利可在平台任意商家无门槛抵扣'},
                    {id:2, icon: require('../../assets/img/mine/yaoqing-big@2x.png'), text: '邀请收益',describe: '邀请好友成为会员获得奖励'},
                    {id:3, icon: require('../../assets/img/mine/shenji-big@2x.png'), text: '升级奖励',describe: '好友成为PLUS会员获得奖励'},
                    {id:4, icon: require('../../assets/img/mine/fanyong-big@2x.png'), text: '消费反佣',describe: '好友消费可获得奖励'}
                ],
                // "vipBtn": [
                //     {id:1, icon: require('../../assets/img/mine/fenxiang@2x.png'), text: '分享好友赚钱'},
                //     {id:2, icon: require('../../assets/img/mine/shoukuan@2x.png'), text: '收款费率更低'},
                //     {id:3, icon: require('../../assets/img/mine/huankuan@2x.png'), text: '还款费率更低'},
                //     {id:4, icon: require('../../assets/img/mine/ceping@2x.png'), text: '免费测评信用'}
                // ],
                // "vipCard": [
                //     {id:1, icon: require('../../assets/img/mine/agent_tp@2x.png'), text: '好友升级赚钱',describe: '好友升级奖励55%'},
                //     {id:2, icon: require('../../assets/img/mine/shoukuan@2x(1).png'), text: '收款费率更低',describe: '手续费低至0.55%+1'},
                //     {id:3, icon: require('../../assets/img/mine/huankuan@2x(1).png'), text: '还款费率更低',describe: '手续费低至0.69%+1'},
                //     {id:4, icon: require('../../assets/img/mine/ceping@2x(1).png'), text: '免费测评信用',describe: '每年5次免费测评'}
                // ],
                //执行服务商列表
                "agentBtn": [
                    {id:1, icon: require('../../assets/img/mine/shengji@2x.png'), text: '消费分佣'},
                    {id:2, icon: require('../../assets/img/mine/banka@2x(1).png'), text: '升级奖励'},
                    {id:3, icon: require('../../assets/img/mine/agent_huankuan@2x(1).png'), text: '推荐佣金'},
                    {id:4, icon: require('../../assets/img/mine/agent_shoukuan@2x(1).png'), text: '推广补贴'},
                    {id:5, icon: require('../../assets/img/mine/zhaoshang@2x.png'), text: '平台分红'},
                    {id:6, icon: require('../../assets/img/mine/agent_kefu@2x(1).png'), text: '专属客服'},
                    {id:7, icon: require('../../assets/img/mine/agent_jiaoyi@2x(1).png'), text: '还款分润'},
                    {id:8, icon: require('../../assets/img/mine/shoukuanicon@2x.png'), text: '收款分润'}
                ],
                "agentCard": [
                    {id:1, icon: require('../../assets/img/mine/agent_tp@2x.png'), text: '消费分佣',describe: '享受旗下所有用户在平台商户消费分红'},
                    {id:2, icon: require('../../assets/img/mine/agent_banka@2x.png'), text: '升级奖励',describe: '享受所旗下所有用户升级PLUS会员奖励'},
                    {id:3, icon: require('../../assets/img/mine/agent_huankuan@2x.png'), text: '推荐佣金',describe: '享受推荐平级服务商的推荐奖励'},
                    {id:4, icon: require('../../assets/img/mine/agent_shoukuan@2x.png'), text: '推广补贴',describe: '服务商推荐商家、用户，享受推广补贴'},
                    {id:5, icon: require('../../assets/img/mine/agent_zhaoshang@2x.png'), text: '平台分红',describe: '享受平台收益的分红'},
                    {id:6, icon: require('../../assets/img/mine/agent_kefu@2x.png'), text: '专属客服',describe: '1V1在线客服优先解答'},
                    {id:7, icon: require('../../assets/img/mine/agent_jiaoyi@2x.png'), text: '还款分润',describe: '享受旗下所有用户还款的交易流水分润'},
                    {id:8, icon: require('../../assets/img/mine/SK@2x.png'), text: '收款分润',describe: '享受旗下所有用户收款的交易流水分润'}
                ],
                // "agentBtn": [
                //     {id:1, icon: require('../../assets/img/mine/shengji@2x.png'), text: '好友升级赚钱'},
                //     {id:2, icon: require('../../assets/img/mine/banka@2x(1).png'), text: '好友办卡收益'},
                //     {id:3, icon: require('../../assets/img/mine/agent_huankuan@2x(1).png'), text: '好友还款分润'},
                //     {id:4, icon: require('../../assets/img/mine/agent_shoukuan@2x(1).png'), text: '好友收款分润'},
                //     {id:5, icon: require('../../assets/img/mine/zhaoshang@2x.png'), text: '招商补贴'},
                //     {id:6, icon: require('../../assets/img/mine/agent_pingtai@2x(1).png'), text: '平台补贴'},
                //     {id:7, icon: require('../../assets/img/mine/agent_jiaoyi@2x(1).png'), text: '自用交易省钱'},
                //     {id:8, icon: require('../../assets/img/mine/agent_kefu@2x(1).png'), text: '1V1专属客服'}
                // ],
                // "agentCard": [
                //     {id:1, icon: require('../../assets/img/mine/agent_tp@2x.png'), text: '好友升级赚钱',describe: '好友升级奖励55%'},
                //     {id:2, icon: require('../../assets/img/mine/agent_banka@2x.png'), text: '好友办卡收益',describe: '好友办卡40元/张'},
                //     {id:3, icon: require('../../assets/img/mine/agent_huankuan@2x.png'), text: '好友还款分润',describe: '好友还款分润最高0.12%'},
                //     {id:4, icon: require('../../assets/img/mine/agent_shoukuan@2x.png'), text: '好友收款分润',describe: '好友收款分润最高0.22%'},
                //     {id:5, icon: require('../../assets/img/mine/agent_zhaoshang@2x.png'), text: '招商补贴',describe: '直招执行服务商奖励40%'},
                //     {id:6, icon: require('../../assets/img/mine/agent_pingtai@2x.png'), text: '平台补贴',describe: '直招执行服务商所有利润的10%'},
                //     {id:7, icon: require('../../assets/img/mine/agent_jiaoyi@2x.png'), text: '自用交易省钱',describe: '收款0.52%+2还款0.62%+1'},
                //     {id:8, icon: require('../../assets/img/mine/agent_kefu@2x.png'), text: '1V1专属客服',describe: '在线客服，即时回复无需等待'}
                // ],
                //城市服务商列表
                "partnerBtn": [
                    {id:1, icon: require('../../assets/img/mine/partner_shengji@2x.png'), text: '消费分佣'},
                    {id:2, icon: require('../../assets/img/mine/partner_banka@2x(1).png'), text: '升级奖励'},
                    {id:3, icon: require('../../assets/img/mine/partner_huankuan@2x(1).png'), text: '推荐佣金'},
                    {id:4, icon: require('../../assets/img/mine/partner_shoukuan@2x(1).png'), text: '推广补贴'},
                    {id:5, icon: require('../../assets/img/mine/zhaoshangya@2x.png'), text: '平台分红'},
                    {id:6, icon: require('../../assets/img/mine/partner_pingtai@2x.png'), text: '区域分红'},
                    {id:7, icon: require('../../assets/img/mine/lianxiya@2x.png'), text: '专属客服'},
                    {id:8, icon: require('../../assets/img/mine/gengduo@2x.png'), text: '更多'}
                ],
                "partnerCard": [
                    {id:1, icon: require('../../assets/img/mine/agent_tp@2x.png'), text: '消费分佣',describe: '享受旗下所有用户,在平台商户消费分红'},
                    {id:2, icon: require('../../assets/img/mine/agent_banka@2x.png'), text: '升级奖励',describe: '享受所旗下所有用户,升级PLUS会员奖励'},
                    {id:3, icon: require('../../assets/img/mine/agent_huankuan@2x.png'), text: '推荐佣金',describe: '享受推荐平级服务商的推荐奖励'},
                    {id:4, icon: require('../../assets/img/mine/agent_shoukuan@2x.png'), text: '推广补贴',describe: '服务商推荐商家、用户，享受推广补贴。'},
                    {id:5, icon: require('../../assets/img/mine/agent_zhaoshang@2x.png'), text: '平台分红',describe: '享受平台收益的分红'},
                    {id:6, icon: require('../../assets/img/mine/agent_pingtai@2x.png'), text: '区域分红',describe: '享受所在区域平台收益分红'},
                    {id:7, icon: require('../../assets/img/mine/fenhong@2x.png'), text: '专属客服',describe: '1V1在线客服，优先解答'},
                    {id:8, icon: require('../../assets/img/mine/dujia@2x.png'), text: '物料支持',describe: '提供全套地推所需的广宣物料电子模板'}
                ]
                // "partnerBtn": [
                //     {id:1, icon: require('../../assets/img/mine/partner_shengji@2x.png'), text: '好友升级赚钱'},
                //     {id:2, icon: require('../../assets/img/mine/partner_banka@2x(1).png'), text: '好友办卡收益'},
                //     {id:3, icon: require('../../assets/img/mine/partner_huankuan@2x(1).png'), text: '好友还款分润'},
                //     {id:4, icon: require('../../assets/img/mine/partner_shoukuan@2x(1).png'), text: '好友收款分润'},
                //     {id:5, icon: require('../../assets/img/mine/partner_zhaoshang@2x(1).png'), text: '招商补贴'},
                //     {id:6, icon: require('../../assets/img/mine/partner_pingtai@2x.png'), text: '平台补贴'},
                //     {id:7, icon: require('../../assets/img/mine/partner_quyu@2x.png'), text: '区域补贴'},
                //     {id:8, icon: require('../../assets/img/mine/gengduo@2x.png'), text: '更多'}
                // ],
                // "partnerCard": [
                //     {id:1, icon: require('../../assets/img/mine/agent_tp@2x.png'), text: '好友升级赚钱',describe: '好友升级奖励55%'},
                //     {id:2, icon: require('../../assets/img/mine/agent_banka@2x.png'), text: '好友办卡收益',describe: '好友办卡40元/张'},
                //     {id:3, icon: require('../../assets/img/mine/agent_huankuan@2x.png'), text: '好友还款分润',describe: '好友还款分润最高0.12%'},
                //     {id:4, icon: require('../../assets/img/mine/agent_shoukuan@2x.png'), text: '好友收款分润',describe: '好友收款分润最高0.22%'},
                //     {id:5, icon: require('../../assets/img/mine/agent_zhaoshang@2x.png'), text: '招商补贴',describe: '直招执行服务商奖励40%'},
                //     {id:6, icon: require('../../assets/img/mine/agent_pingtai@2x.png'), text: '平台补贴',describe: '直招执行服务商所有利润的10%'},
                //     {id:7, icon: require('../../assets/img/mine/fenhong@2x.png'), text: '区域分红',describe: '享受区域所有用户收益'},
                //     {id:8, icon: require('../../assets/img/mine/dujia@2x.png'), text: '区域独家',describe: '一城一主，聚盈模式'},
                //     {id:9, icon: require('../../assets/img/mine/agent_kefu@2x.png'), text: '1V1专属客服',describe: '在线客服，即时回复无需等待'},
                //     {id:10, icon: require('../../assets/img/mine/agent_jiaoyi@2x.png'), text: '自用交易省钱',describe: '收款0.52%+2还款0.62%+1'}
                // ]
            }
        },
        computed:{
            //动态切换头图
            getHeadImg(){
                let that = this;
                if(that.getType=='1'){
                    console.log('vip');
                    return require('../../assets/img/mine/PLUS@2x.png');
                }else if(that.getType=='2'){
                    console.log('agent');
                    return require('../../assets/img/mine/zhixing@2x.png');
                }else if(that.getType=='3'){
                    console.log('partner');
                    return require('../../assets/img/mine/hehuorenya@2x.png');
                }
            },
        //    动态获取type值
            getType(){
                return this.$route.query.type || '1';
            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="sass">
.equity
    color: #3E3E4D
    text-align: center
    .headImg
        width: 100vw
        height: auto
        background: #fff
        padding: .19rem 0 .15rem 0
        img
            width: 6.06rem
            height: 3.13rem
            display: block
            margin: 0 auto
    .content
        width: 100vw
        padding: .2rem
        .btnBox
            width: 100%
            background: #fff
            box-shadow: 0 0 .05rem 0 rgba(144, 144, 144, 0.2)
            border-radius: .2rem
            padding-top: .04rem
            h1
                font-size: .32rem
                font-weight: bold
                line-height: .68rem
            .itemBox
                display: flex
                flex-wrap: wrap
                align-items: center
                justify-content: space-between
                .item
                    width: 25%
                    padding: .13rem 0 .3rem 0
                    img
                        width: .52rem
                        height: .52rem
                        margin-bottom: .18rem
                    p
                        font-size: .23rem
        .cardBox
            width: 100%
            background: #fff
            box-shadow: 0 0 .05rem 0 rgba(144, 144, 144, 0.2)
            border-radius: .2rem
            display: flex
            flex-wrap: wrap
            align-items: center
            justify-content: space-between
            padding: .32rem .20rem .12rem
            margin-top: .2rem
            .item
                display: flex
                width: 3.18rem
                min-height: 1.7rem
                align-items: flex-start
                text-align: left
                box-shadow: 0 0 .12rem 0 rgba(184,181,181,0.2)
                margin-bottom: .20rem
                padding: .14rem .12rem .08rem .04rem
                img
                    width: 1.18rem !important
                    height: 1.18rem !important
                    margin-right: .01rem
                div
                    width: 1.8rem
                    font-size: .28rem
                    p
                        font-weight: 600
                        margin-bottom: .04rem
                    span
                        font-size: .2rem
                        line-height: .2rem
                        color: #909090

</style>
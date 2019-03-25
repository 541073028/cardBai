<template>
    <div class="equity">
        <div class="headImg">
            <img :src="getHeadImg" alt="">
        </div>
        <!--【getType：1--vip会员，2--一级代理，3--城市合伙人】-->
        <!--vip会员-->
        <div class="content" v-if="getType=='1'">
            <div class="btnBox">
                <h1>VIP会员 享特权</h1>
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
                <h1>一级代理 享特权</h1>
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
                <h1>城市合伙人 享特权</h1>
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
                //vip会员列表
                "vipBtn": [
                    {id:1, icon: require('../../assets/img/mine/fenxiang@2x.png'), text: '分享好友赚钱'},
                    {id:2, icon: require('../../assets/img/mine/shoukuan@2x.png'), text: '收款费率更低'},
                    {id:3, icon: require('../../assets/img/mine/huankuan@2x.png'), text: '还款费率更低'},
                    {id:4, icon: require('../../assets/img/mine/ceping@2x.png'), text: '免费测评信用'}
                ],
                "vipCard": [
                    {id:1, icon: require('../../assets/img/mine/agent_tp@2x.png'), text: '好友升级赚钱',describe: '好友升级奖励55%'},
                    {id:2, icon: require('../../assets/img/mine/shoukuan@2x(1).png'), text: '收款费率更低',describe: '手续费低至0.55%+1'},
                    {id:3, icon: require('../../assets/img/mine/huankuan@2x(1).png'), text: '还款费率更低',describe: '手续费低至0.69%+1'},
                    {id:4, icon: require('../../assets/img/mine/ceping@2x(1).png'), text: '免费测评信用',describe: '每年5次免费测评'}
                ],
                //一级代理列表
                "agentBtn": [
                    {id:1, icon: require('../../assets/img/mine/shengji@2x.png'), text: '好友升级赚钱'},
                    {id:2, icon: require('../../assets/img/mine/banka@2x(1).png'), text: '好友办卡收益'},
                    {id:3, icon: require('../../assets/img/mine/agent_huankuan@2x(1).png'), text: '好友还款分润'},
                    {id:4, icon: require('../../assets/img/mine/agent_shoukuan@2x(1).png'), text: '好友收款分润'},
                    {id:5, icon: require('../../assets/img/mine/zhaoshang@2x.png'), text: '招商补贴'},
                    {id:6, icon: require('../../assets/img/mine/agent_pingtai@2x(1).png'), text: '平台补贴'},
                    {id:7, icon: require('../../assets/img/mine/agent_jiaoyi@2x(1).png'), text: '自用交易省钱'},
                    {id:8, icon: require('../../assets/img/mine/agent_kefu@2x(1).png'), text: '1V1专属客服'}
                ],
                "agentCard": [
                    {id:1, icon: require('../../assets/img/mine/agent_tp@2x.png'), text: '好友升级赚钱',describe: '好友升级奖励55%'},
                    {id:2, icon: require('../../assets/img/mine/agent_banka@2x.png'), text: '好友办卡收益',describe: '好友办卡40元/张'},
                    {id:3, icon: require('../../assets/img/mine/agent_huankuan@2x.png'), text: '好友还款分润',describe: '好友还款分润最高0.12%'},
                    {id:4, icon: require('../../assets/img/mine/agent_shoukuan@2x.png'), text: '好友收款分润',describe: '好友收款分润最高0.22%'},
                    {id:5, icon: require('../../assets/img/mine/agent_zhaoshang@2x.png'), text: '招商补贴',describe: '直招一级代理奖励40%'},
                    {id:6, icon: require('../../assets/img/mine/agent_pingtai@2x.png'), text: '平台补贴',describe: '直招代理所有利润的10%'},
                    {id:7, icon: require('../../assets/img/mine/agent_jiaoyi@2x.png'), text: '自用交易省钱',describe: '收款0.52%+2还款0.62%+1'},
                    {id:8, icon: require('../../assets/img/mine/agent_kefu@2x.png'), text: '1V1专属客服',describe: '在线客服，即时回复无需等待'}
                ],
                //城市合伙人列表
                "partnerBtn": [
                    {id:1, icon: require('../../assets/img/mine/partner_shengji@2x.png'), text: '好友升级赚钱'},
                    {id:2, icon: require('../../assets/img/mine/partner_banka@2x(1).png'), text: '好友办卡收益'},
                    {id:3, icon: require('../../assets/img/mine/partner_huankuan@2x(1).png'), text: '好友还款分润'},
                    {id:4, icon: require('../../assets/img/mine/partner_shoukuan@2x(1).png'), text: '好友收款分润'},
                    {id:5, icon: require('../../assets/img/mine/partner_zhaoshang@2x(1).png'), text: '招商补贴'},
                    {id:6, icon: require('../../assets/img/mine/partner_pingtai@2x.png'), text: '平台补贴'},
                    {id:7, icon: require('../../assets/img/mine/partner_quyu@2x.png'), text: '区域补贴'},
                    {id:8, icon: require('../../assets/img/mine/gengduo@2x.png'), text: '更多'}
                ],
                "partnerCard": [
                    {id:1, icon: require('../../assets/img/mine/agent_tp@2x.png'), text: '好友升级赚钱',describe: '好友升级奖励55%'},
                    {id:2, icon: require('../../assets/img/mine/agent_banka@2x.png'), text: '好友办卡收益',describe: '好友办卡40元/张'},
                    {id:3, icon: require('../../assets/img/mine/agent_huankuan@2x.png'), text: '好友还款分润',describe: '好友还款分润最高0.12%'},
                    {id:4, icon: require('../../assets/img/mine/agent_shoukuan@2x.png'), text: '好友收款分润',describe: '好友收款分润最高0.22%'},
                    {id:5, icon: require('../../assets/img/mine/agent_zhaoshang@2x.png'), text: '招商补贴',describe: '直招一级代理奖励40%'},
                    {id:6, icon: require('../../assets/img/mine/agent_pingtai@2x.png'), text: '平台补贴',describe: '直招代理所有利润的10%'},
                    {id:7, icon: require('../../assets/img/mine/fenhong@2x.png'), text: '区域分红',describe: '享受区域所有用户收益'},
                    {id:8, icon: require('../../assets/img/mine/dujia@2x.png'), text: '区域独家',describe: '一城一主，聚盈模式'},
                    {id:9, icon: require('../../assets/img/mine/agent_kefu@2x.png'), text: '1V1专属客服',describe: '在线客服，即时回复无需等待'},
                    {id:10, icon: require('../../assets/img/mine/agent_jiaoyi@2x.png'), text: '自用交易省钱',describe: '收款0.52%+2还款0.62%+1'}
                ]
            }
        },
        computed:{
            //动态切换头图
            getHeadImg(){
                let that = this;
                if(that.getType=='1'){
                    console.log('vip');
                    return require('../../assets/img/mine/equity_vip@2x.png');
                }else if(that.getType=='2'){
                    console.log('agent');
                    return require('../../assets/img/mine/daili@2x.png');
                }else if(that.getType=='3'){
                    console.log('partner');
                    return require('../../assets/img/mine/hehuoren@2x.png');
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
            padding: .32rem .25rem .12rem
            margin-top: .2rem
            .item
                display: flex
                width: 3.18rem
                align-items: center
                text-align: left
                box-shadow: 0 0 .12rem 0 rgba(184,181,181,0.2)
                margin-bottom: .20rem
                padding: .14rem .25rem .08rem .04rem
                img
                    width: 1.18rem
                    height: 1.18rem
                    margin-bottom: .02rem
                div
                    font-size: .28rem
                    p
                        font-weight: 600
                        margin-bottom: .04rem
                    span
                        font-size: .2rem
                        line-height: .2rem
                        color: #909090

</style>
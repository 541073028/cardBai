<template>
    <div class="equitys">
        <div class="headImg">
            <img :src="getHeadImg" alt="" :class="{imgAct: getType=='1'||getType=='2'}">
        </div>
        <!--【getType：1--咖啡机，2--空气炸锅，3--城市合伙人】-->
        <!--PLUS会员-->
        <div class="contentOne" v-if="getType=='1'">
            <div class="title">
                <h2>产品参数：</h2>
                <div class="tag">咖啡机</div>
            </div>
            <div class="itemBox">
                <p v-html="infoOne"></p>
            </div>
        </div>
        <!--一级代理-->
        <div class="contentOne" v-else-if="getType=='2'">
            <div class="title">
                <h2>产品参数：</h2>
                <div class="tag">空气炸锅</div>
            </div>
            <div class="itemBox">
                <p v-html="infoTwo"></p>
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
        name: "equitys",
        data(){
            return {
                //type=2
                "infoTwo": '证书编号：2017010712942271<br>证书状态：有效<br>产品名称：电烤炉（空气炸锅）3C<br>规格型号：SB-D18 1400W 220V～ 50Hz<br>产品名称：山本 SB-D18<br>保修期: 12个月<br>品牌: 山本<br>型号: SB-D18<br>生产企业: 浙江宁波嘉乐电器有限公司<br>颜色分类: 黑色<br>电炸锅类型: 空气炸锅<br>',
                //type=1
                "infoOne": '证书编号：2017010717968198<br>证书状态：有效<br>产品名称：飞利浦滴漏式咖啡机3C<br>规格型号：HD7431, HD7434, 220V～ 50Hz 640W<br>产品名称：Philips/飞利浦 HD7431<br>咖啡机品牌: Philips/飞利浦<br>型号: HD7431<br>颜色分类: 白色 黑色 粉色<br>使用方式: 滴漏式<br>咖啡机咖啡壶分类: 滴漏式<br>货号: HD7431<br>功能: 滴漏式',
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
            }
        },
        computed:{
            //动态切换头图
            getHeadImg(){
                let that = this;
                if(that.getType=='1'){
                    console.log('vip');
                    return require('../../assets/img/mine/kfj@2x.png');
                }else if(that.getType=='2'){
                    console.log('agent');
                    return require('../../assets/img/mine/kqzg@2x.png');
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
    .equitys
        color: #3E3E4D
        text-align: center
        background: #fff
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
            .imgAct
                width: 3.82rem
                height: 3.82rem
                display: block
                margin: .19rem auto 0
        .contentOne
            padding: 0 .5rem
            .title
                display: flex
                align-items: center
                justify-content: space-between
                font-size: .32rem
                color: rgba(51,51,51,1)
                font-weight: bold
                .tag
                    width: 1.62rem
                    line-height: .54rem
                    border: .01rem solid rgba(51,51,51,1)
                    border-radius: .1rem
            .itemBox
                padding: .2rem 0 .4rem
                p
                    text-align: left
                    font-size: .24rem
                    line-height: .4rem
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
                    height: 1.7rem
                    align-items: center
                    text-align: left
                    box-shadow: 0 0 .12rem 0 rgba(184,181,181,0.2)
                    margin-bottom: .20rem
                    padding: .14rem .1rem .08rem .04rem
                    img
                        min-width: 1.18rem
                        height: 1.18rem
                        margin-bottom: .02rem
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
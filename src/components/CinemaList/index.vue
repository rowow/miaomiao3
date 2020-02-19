<template>
  <div class="cinema_body" ref="cinema_body">
      <Loading v-if="isLoading" />
        <Scroller v-else :handlerToScroll="handlerToScroll" :handlerToTouchEnd="handlerToTouchEnd">
            <ul>
                <p class="pullDownMsg">{{ pullDownMsg }}</p>
                <li v-for="(item,i) in cinemaList" :key="i">
                    <div>
                        <span>{{ item.rm}}</span>
                        <span class="q"><span class="price"> {{ item.sellPrice }}</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>{{ item.addr }}</span>
                        <span>{{ item.distance }}</span>
                    </div>
                    <div class="card">
                        <!-- <div>小吃</div>
                        <div>折扣卡</div> -->
                        <span v-for="(value,key) in item.tag" :key="key">
                            <div v-if="value===1" :class=" key | classCard ">{{ key | formatCard }}</div>
                        </span>
                    </div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>

export default {
    name : 'CinemaList',
    data(){
        return{
            cinemaList:[
                {
                    "id" : 17158,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店)",
                    "sellPrice" : "18",
                    "addr" : "松江区地铁九号线九亭站二号楼内",
                    "distance" : "108km",
                    "tag" : {
                        "allowRefund" : 1,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 1,
                        "hallTypeVoList" : [],
                        "sell" : 1,
                        "snack" : 1,
                        "vipTag" : "折扣卡",
                    }
                },
                {
                    "id" : 17281,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店1)",
                    "sellPrice" : "18.5",
                    "addr" : "b江区地铁6号线09站1号楼内",
                    "distance" : "90.8km",
                    "tag" : {
                        "allowRefund" : 0,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 1,
                        "hallTypeVoList" : [],
                        "sell" : 0,
                        "snack" : 1,
                        "vipTag" : "折扣卡",
                    }
                },
                {
                    "id" : 17158,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店2)",
                    "sellPrice" : "8.5",
                    "addr" : "阿斯顿松号楼内",
                    "distance" : "800km",
                    "tag" : {
                        "allowRefund" : 1,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 0,
                        "hallTypeVoList" : [],
                        "sell" : 1,
                        "snack" : 0,
                        "vipTag" : "折扣卡",
                    }
                },
                {
                    "id" : 17158,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店3)",
                    "sellPrice" : "17",
                    "addr" : "湖南省贝拉市二号口倒数第去",
                    "distance" : "10km",
                    "tag" : {
                        "allowRefund" : 1,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 1,
                        "hallTypeVoList" : [],
                        "sell" : 1,
                        "snack" : 1,
                        "vipTag" : "折扣卡",
                    }
                },
                {
                    "id" : 17158,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店4)",
                    "sellPrice" : "16",
                    "addr" : "东莞市哦其次区可参考all噢奇葩",
                    "distance" : "0.5km",
                    "tag" : {
                        "allowRefund" : 0,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 1,
                        "hallTypeVoList" : [],
                        "sell" : 0,
                        "snack" : 0,
                        "vipTag" : "折扣卡",
                    }
                },
                {
                    "id" : 17158,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店5)",
                    "sellPrice" : "180",
                    "addr" : "松江区地铁19号线0亭站10号楼内",
                    "distance" : "18km",
                    "tag" : {
                        "allowRefund" : 1,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 1,
                        "hallTypeVoList" : [],
                        "sell" : 0,
                        "snack" : 1,
                        "vipTag" : "折扣卡",
                    }
                },
            ],
            cinemaListCopy:[
                {
                    "id" : 17158,
                    "mark" : 0,
                    "rm" : "copy-JIA(佳莱影城九亭店)",
                    "sellPrice" : "18",
                    "addr" : "松江区地铁九号线九亭站二号楼内",
                    "distance" : "108km",
                    "tag" : {
                        "allowRefund" : 1,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 1,
                        "hallTypeVoList" : [],
                        "sell" : 1,
                        "snack" : 1,
                        "vipTag" : "折扣卡",
                    }
                },
                {
                    "id" : 17281,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店1)",
                    "sellPrice" : "18.5",
                    "addr" : "b江区地铁6号线09站1号楼内",
                    "distance" : "90.8km",
                    "tag" : {
                        "allowRefund" : 0,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 1,
                        "hallTypeVoList" : [],
                        "sell" : 0,
                        "snack" : 1,
                        "vipTag" : "折扣卡",
                    }
                },
                {
                    "id" : 17158,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店2)",
                    "sellPrice" : "8.5",
                    "addr" : "阿斯顿松号楼内",
                    "distance" : "800km",
                    "tag" : {
                        "allowRefund" : 1,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 0,
                        "hallTypeVoList" : [],
                        "sell" : 1,
                        "snack" : 0,
                        "vipTag" : "折扣卡",
                    }
                },
                {
                    "id" : 17158,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店3)",
                    "sellPrice" : "17",
                    "addr" : "湖南省贝拉市二号口倒数第去",
                    "distance" : "10km",
                    "tag" : {
                        "allowRefund" : 1,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 1,
                        "hallTypeVoList" : [],
                        "sell" : 1,
                        "snack" : 1,
                        "vipTag" : "折扣卡",
                    }
                },
                {
                    "id" : 17158,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店4)",
                    "sellPrice" : "16",
                    "addr" : "东莞市哦其次区可参考all噢奇葩",
                    "distance" : "0.5km",
                    "tag" : {
                        "allowRefund" : 0,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 1,
                        "hallTypeVoList" : [],
                        "sell" : 0,
                        "snack" : 0,
                        "vipTag" : "折扣卡",
                    }
                },
                {
                    "id" : 17158,
                    "mark" : 0,
                    "rm" : "JIA(佳莱影城九亭店5)",
                    "sellPrice" : "180",
                    "addr" : "松江区地铁19号线0亭站10号楼内",
                    "distance" : "18km",
                    "tag" : {
                        "allowRefund" : 1,
                        "buyout" : 0,
                        "cityCardTag" : 0,
                        "deal" : 0,
                        "endorse" : 1,
                        "hallTypeVoList" : [],
                        "sell" : 0,
                        "snack" : 1,
                        "vipTag" : "折扣卡",
                    }
                },
            ],
            pullDownMsg : '',
            isLoading : true
        }
    },
    mounted(){
        this.isLoading = false
    },
    // mounted(){
    //     // vue中提供nextTick机制，在页面数据和dom加载完成后才执行
    //     this.$nextTick(()=>{
    //         var scroll = new BScroll(this.$refs.cinema_body,{
    //             tap : true,  // 打开tap事件
    //             probeType : 1
    //         })

    //         scroll.on('scroll',(pos)=>{
    //             // console.log('scroll');
    //             if(pos.y > 30){
    //                 this.pullDownMsg = '正在更新中...'
    //             }
    //         })

    //         scroll.on('touchEnd',(pos)=>{
    //             // console.log('touchEnd');
    //             if(pos.y > 30){
    //                 this.pullDownMsg = '更新成功！！！！'
    //                 setTimeout(()=>{
    //                     this.cinemaList = this.cinemaListCopy
    //                     this.pullDownMsg = ''
    //                 },1500)
    //             }
    //         })

    //     })
    // },
    methods:{
        handlerToScroll(pos){
            if(pos.y > 30){
                this.pullDownMsg = '正在更新中...'
            }
        },
        handlerToTouchEnd(pos){
           if(pos.y > 30){
                this.pullDownMsg = '更新成功！！！！'
                setTimeout(()=>{
                    this.cinemaList = this.cinemaListCopy
                    this.pullDownMsg = ''
                },1500)
            } 
        }
    },
    filters:{
        // 格式化卡片信息（将后台数据英文转化为中文）
        formatCard(key){
            var card = [
                { key : "allowRefund" , value : "退" },
                { key : "endorse" , value : "改签" },
                { key : "sell" , value : "折扣卡" },
                { key : "snack" , value : "小吃" },
            ]
            for(var i = 0;i < card.length;i++){
                if(card[i].key === key){
                    return card[i].value
                }
            }
            return '';  // 如果没有匹配到返回空字符串
        },

        // 根据后台数据修改对应数据的class
        classCard(key){
            var card = [
                { key : "allowRefund" , value : "bl" },
                { key : "endorse" , value : "bl" },
                { key : "sell" , value : "or" },
                { key : "snack" , value : "or" },
            ]
            for(var i = 0;i < card.length;i++){
                if(card[i].key === key){
                    return card[i].value
                }
            }
            return '';  // 如果没有匹配到返回空字符串
        }
    }
}
</script>

<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
.cinema_body .pullDownMsg{margin: 0;padding: 0;border: none;}
</style>
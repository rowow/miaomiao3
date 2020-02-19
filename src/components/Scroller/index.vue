<template>
  <div class="warpper" ref="warpper">
      <slot></slot>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
    name : 'Scroller',
    props : {
        handlerToScroll : {
            type : Function,
            default : function(){}
        },
        handlerToTouchEnd : {
            type : Function,
            default : function(){}
        }
    },
    mounted(){
        var scroll = new BScroll(this.$refs.warpper,{
            tap : true,  // 打开tap事件
            probeType : 1
        })

        this.scroll = scroll

        scroll.on('scroll',(pos)=>{
            this.handlerToScroll(pos);
        })

        scroll.on('touchEnd',(pos)=>{
            this.handlerToTouchEnd(pos)
        })
    },
    methods:{
        // y轴滚动的方法
        toScrollTop(y){
            this.scroll.scrollTo(0,y)
        }
    }
}
</script>

<style scoped>
.warpper{height: 100%;}
</style>
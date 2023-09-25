<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<template>
<div ref="wrapper" class="wrapper" >
    <div class="content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    // eslint-disable-next-line
    name : "Scroll",
    props:{
        probeType : {
            type : Number,
            default : 0
        },
        click: {
            type: Boolean,
            default: true
        },
       
    },
    data(){
        return {
            scroll : null
        }
    },
    mounted () {
        //1.创建BSceoll对象
        this.scroll =  new BScroll(this.$refs.wrapper,{
            click : true,
            probeType : this.probeType ,
            pullingUp : this.pullingUp,
    })

        //2.监听滚动区域的位置
        this.scroll.on('scroll',(position) => {
            console.log(position)
            this.$emit('scroll',position)
        })


        
      

    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },

        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            console.log('-----------');
            this.scroll && this.scroll.refresh()
        }
    }

}
</script>

<style >

</style>
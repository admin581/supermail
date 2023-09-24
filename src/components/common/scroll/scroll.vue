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
        pullingUp : {
            type : Boolean,
            default : false
        },
        data: {
            type: Array,
            default() {
                return []
            }
        }
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
            // console.log(position)
            this.$emit('scroll',position)
        })


        //3.上拉加载更多
        this.scroll.on('pullingUp',()=>{
            console.log('上拉加载更多')
            this.$emit('pullingUp')
        })

    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
        },

        finishPullUp(){
            this.scroll.finishPullUp()
        }
    }

}
</script>

<style >

</style>
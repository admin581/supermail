<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="tab-control">
        <div  class="tab-control-item" 
               v-for="(item,index) in titles" 
               :class="{active: currentIndex === index}"  
               @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name : 'TabControl',
    props : {
        titles:{
            type :Array,
            default() {
                return ['流行', '新款', '精选']
            }
        }
    },
    data(){
        return {
            currentIndex : 0
        }
    },
    methods :{
        itemClick(index){
            this.currentIndex = index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>

    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }

    .tab-control-item{
        flex : 1;
    }

    .tab-control-item span {
        padding: 5px; /*这个是为了流行与下面的边距*/ 
    }
    .active {
        color: var(--color-high-text);
    }

    .active span {
        border-bottom : 3px solid var(--color-tint)
    }


</style>
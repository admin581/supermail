<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<template>
<div class="wrapper" ref="">
    <div class="content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name : "scroll",
    data(){
        return {
            scroll : null
        }
    },
    mounted : {
        
    }

}
</script>

<style >

</style>
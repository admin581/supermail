<template>
   <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name : 'TabBar'
}
</script>

<style>
 #tab-bar {
    /* display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* //作用是给上面有点阴影，让看的人比较舒服 */
   /* box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.08); */

    background-color: #f6f6f6;
    height: 49px;
    border-top: 1px solid #eee;
    box-shadow: 0 -1px 1px rgba(150,150,150,.08);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
 }

  
</style>
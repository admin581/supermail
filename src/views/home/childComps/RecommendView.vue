<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="recommend">
        <div v-for="item in recommends" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name : 'RecommendView',
    props : {
        recommends : {
            type :Array,
            dafault(){
                return []
            }
        }
    }
}
</script>

<style>
    .recommend{
        display: flex;
        justify-content: space-around; /* 控制元素的水平分布，添加平均间距 */
        align-items: center; /* 控制元素的垂直居中 */
        width: 100%; 
        font-size: 14px; /*设置推荐项内文本的字体大小*/
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }

    .recommend-item {
        flex : 1;
        margin: 0 10px; /* 内层容器的左右间距 */
    }

    .recommend-item img{
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>
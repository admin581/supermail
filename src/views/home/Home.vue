<!-- eslint-disable vue/valid-v-for -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
    <tab-control class="tab-control"   :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li v-for="index in 100" :key="index"> 这是第{{ index }}个li元素</li>
    </ul>
   <!-- ul>li{这是第$个li元素}*100 -->

  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import HomeSwiper from './childComps/HomeSwiper'
// eslint-disable-next-line no-unused-vars
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

//公共组件
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl'

//方法
import  {getHomeMultidata} from 'network/home.js'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    components : {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    data(){
      return {
        // result : null
        banners : [],
        recommends : []
      }
    },
    created(){
      //1,请求多个数据
      getHomeMultidata().then(res => {
        console.log(res)
        //这一行是为了保存数据；因为函数执行完之后，里面的数据就会被回收
        // this.result = res
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
        console.log(this.banners) // 添加这行代码来检查 banners 数组是否有正确的数据  
        console.log(this.recommends) // 添加这行代码来检查 banners 数组是否有正确的数据  
      })
    }
  }
</script>

<style scoped>

  #home{
    margin-top: 44px; /* 标题栏的高度 */

  }

  .home-nav{
    background-color: var(--color-tint);
    color : #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 44px; /* 标题栏的高度 */
    z-index : 9
  }

  /*用来向上推动tab-control这个的内容，他会在页面停留*/
  .tab-control{
    position: sticky;
    top : 44px
  }
</style>

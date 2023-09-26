<!-- eslint-disable vue/valid-v-for -->
<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            >
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control"   
                  :titles="['流行','新款','精选']"
                  @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

//公共组件
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

//方法,请求网络数据
import  {getHomeMultidata , getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utils'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    components : {
      // MainTabBar,
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    data(){
      return {
        // result : null
        banners : [],
        recommends : [],
        goods : {
          'pop' : {page : 0 , list : []},
          'new' : {page : 0 , list : []},
          'sell' : {page : 0 , list : []}
        },
        currentType : 'pop',
        isShowBackTop : false,
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }

    },
    //写主要的逻辑
    created(){
      //1,请求多个数据
      this.getHomeMultidata()

      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      
    },
    mounted(){
      // //3.监听item中图片加载完成
      // this.$bus.$on('itemImageLoad',() => {
      //   console.log('----------')
      //   this.$refs.scroll.refresh()
      // })

      // 防抖
      const refresh = debounce(this.$refs.scroll.refresh,200)

      this.$bus.$on('itemImageLoad',() =>{
        refresh()
      })
    },
    methods : {

      /**
       * 事件监听相关的方法
       */
      tabClick(index){
        console.log(index);
        switch(index){
          case 0 : 
            this.currentType = 'pop'
            break
          case 1 : 
            this.currentType = 'new'
            break
          case 2 : 
            this.currentType = 'sell'
        }
      },
      backClick(){
        // console.log('backClick');
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        // console.log(position)
        this.isShowBackTop = (-position.y) > 1000
      },
      
      /**
       * 网络请求的相关的方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        console.log(res)
        //这一行是为了保存数据；因为函数执行完之后，里面的数据就会被回收
        // this.result = res
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
        console.log(this.banners) // 添加这行代码来检查 banners 数组是否有正确的数据  
        console.log(this.recommends) // 添加这行代码来检查 banners 数组是否有正确的数据  
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          console.log(res)
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1

      })
      }
    }
  }
</script>

<style scoped>

  #home{
    /* padding-top: 44px;  标题栏的高度 */
    height: 100vh;
    position: relative;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

  }

  .home-nav{
    background-color: var(--color-tint);
    color : #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index : 9;
  }

  /*用来向上推动tab-control这个的内容，他会在页面停留*/
  .tab-control{
    position: sticky;
    top : 44px;
    z-index : 9;
    /* margin-top: 44px; */
  }

   .content{
    overflow: hidden;
  
    position: absolute;
    top: 44px;
    bottom: 49x;
    left: 0;
    right: 0;

    /* flex: 1;*/
    /* padding-bottom: 20px;  */
  }  

  /* .content{ 
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  }*/
</style>

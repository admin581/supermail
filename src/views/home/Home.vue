<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import  {getHomeMultidata} from 'network/home.js'
 
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    components : {
      NavBar
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
        this.recommends = res.data.data.recommend

      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color : #fff;
  }
</style>

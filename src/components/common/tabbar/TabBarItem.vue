<template>
    <div class="tar-bar-item" @click="itemClick">
          <!-- <img src="../../assets/img/tabbar/home.svg" alt="">   //这里不能写死，所以用slot的name -->
        <!-- <div>首页</div> -->

        <!-- item-icon 插槽用于显示非激活状态的图标； -->
        <!-- item-icon-active 插槽用于显示激活状态的图标； -->
        <!-- item-text 插槽用于显示文本内容。 -->
        <div v-if="!isActive">
          <slot  name="item-icon"></slot>
        </div>
        <div v-else >
          <slot  name="item-icon-active"></slot>
        </div>
        
        <!-- <div :class="{active : isActive}"> -->
        <div :style="activeStyle">
          <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name : 'TabBarItem',
    props : {
      path: {
        type: String,
        required: true
      },
      activeColor: {
        type : String,
        default : 'red'
      }
    },
    data(){
      return {
        // isActive : true,
      } 
    },
    computed :{
      isActive(){
        return  this.$route.path.indexOf(this.path)  !== -1
      },
      activeStyle(){
        return this.isActive ? {color : this.activeColor} : {}
      }
    },
    methods : {
      itemClick(){
      //   console.log('itemclick')
      //   //想让按钮可以返回就用push，不想返回就用replace
      //   // this.$router.push()
      //  console.log(this.path)
      //   this.$router.replace(this.path)

// 下面代码用来判断当你点击相同的路由是，可以增加判断
       // 判断当前路由是否与要跳转的路由相同
       if (this.$route.path === this.path) {
        return
      }
      this.$router.push(this.path) // 进行正常的导航
    }
  }
}

</script>

<style>
  .tar-bar-item{
    flex : 1;
    text-align: center;
    height : 49px;
    font-size : 14px;
  }

  .tar-bar-item img{
    width : 24px;
    height: 24px;
    margin-top : 3px;
    vertical-align: middle;
  }


  
</style>
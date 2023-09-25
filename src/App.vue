<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/tabbar/MainTabBar.vue';

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css"
</style>

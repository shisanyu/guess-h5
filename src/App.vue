<template>
  <div id="app">
    <Navigation></Navigation>
    <keep-alive>
      <transition name="fade-transform" mode="out-in">
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </transition>
    </keep-alive>
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import "./style/index.scss";
#app{
  height: 100%;
  position: relative;
  padding-top: 107px;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}
</style>

<template>
  <div class="navigation">
    <div class="nav home" v-if="this.$router.history.current.name=='home'">
      <div class="home-l"><img src="../assets/logo.png" alt=""></div>
      <div class="home-r"><img src="../assets/user.png" alt=""></div>
    </div>
    <div class="nav" v-else>
      <div @click="$router.go(-1)" class="nav-l">
        <img src="../assets/icon-l.png" alt="">
      </div>
      <div class="nav-center">
        <span>竞猜</span>
      </div>
      <div class="nav-r">

      </div>
    </div>

  </div>
</template>

<script>
export default {
  created() {

  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  .nav {
    width: 750px;
    height: 107px;
    background: #19181a;
    display: flex;
    &.home {
      background: #252426;
    }
    > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .nav-l {
      width: 100px;
      padding-left: 30px;
      img {
        width: 18px;
      }
    }
    .nav-center {
      flex: 1;
      justify-content: center;
      text-align: center;
      span {
        font-size: 33px;
      }
    }
    .nav-r {
      width: 100px;
    }
    .home-l {
      padding-left: 30px;
      flex: 1;
      img {
        height: 49px;
      }
    }
    .home-r {
      padding-right: 30px;
      img {
        width: 56px;
      }
    }
  }
}
</style>
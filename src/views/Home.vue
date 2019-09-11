<template>
  <div class="container home">
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item></van-swipe-item>
        <van-swipe-item></van-swipe-item>
      </van-swipe>
    </div>
    <ul class="games">
      <li class="game">
        <img src="../assets/all.png" alt="">
      </li>
      <li class="game" v-for="item in [1,1,1,1,1,1,1,1,1]">
        <img src="../assets/game.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  }
}
</script>

<style lang="scss" scoped>
.container {
  .swiper {
    height: 327px;
    background-color: #000000;
    .van-swipe {
      height: 100%;
    }
  }
  .games {
    padding: 24px 27px;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: #252426;
    width: 100%;
    overflow-x: auto;
    li {
      height: 53px;
      margin-right: 53px;
      display: inline-block;
      img {
        height: 100%;
      }
    }
  }
}
</style>
<template>
  <div class="container home" @scroll="onPageScroll" :style="isFixed?'padding-top:'+fixedHeight +'px':''">
    <div class="pay-type between">
      <div class="img-box zfb-img" @click="changePay(1)" :class="activeTab==1?'active':''">
        <img src="../../assets/logo-zfb.png" alt="">
        <i></i>
      </div>
      <div class="img-box wx-img" @click="changePay(2)" :class="activeTab==2?'active':''">
        <img src="../../assets/logo-wx.png" alt="">
        <i></i>
      </div>
    </div>

    <!-- 购物车 -->
    <van-popup v-model="showShopCar" position="bottom" :style="{width:'100%'}" class="shop-car">

    </van-popup>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      activeGame: "",
      activeTab: 1,//1为支付宝支付，2为微信支付
      baseHeight: 0,
      fixedHeight: 0,
      isFixed: false,
      showShopCar: false//遮罩层
    };
  },
  mounted() {
    this.baseHeight = document.getElementById("navigation").offsetHeight;
    this.fixedHeight = this.$refs.navsBox.offsetHeight;
  },
  methods: {
    //选择支付方式
    changePay(num){
      if(this.activeTab!=num){
        this.activeTab=num;
      }
      
    },
    // 页面滚动
    onPageScroll(e) {
      this.isFixed = e.target.scrollTop >= this.fixedHeight;
    },
    // 改变早盘、滚盘
    changeType(type) {},
    // 添加购物车
    addShopCar(item) {
      this.showShopCar = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/color.scss";
.container {
  height: 100%;
  overflow-y: auto;
  .pay-type{
    padding: 0 40px;
    padding-top: 38px;
    .img-box{
      width: 331px;
	    height: 113px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px 3px 5px 3px;
      float: left;
      position: relative;
      i{
        background: url('../../assets/greensaojiao.png') no-repeat;
        background-size: 70px 48px;
        display: none;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70px;
        height: 48px;
      }
    }
    .zfb-img{
      margin-right: 10px;
      background-color: #479ee3;
      img{
        height: 48px;
      }
    }
    .wx-img{
      background-color: #5ecc3e;
      img{
	      height: 48px;
      }
    }
    .active{
      i{
        display: block;
      }
    }
  }
  .shop-car{
    min-height: 90px;
    background: $dark;
  }
}
</style>

<style lang="css" scoped>
.games >>> .van-tabs__nav {
  background: transparent;
  padding: 24px 27px;
}
.games >>> .van-tabs__wrap {
  height: 100px;
}
.games >>> .van-tab {
  flex-basis: 106px !important;
  /* text-align: left !important; */
}
</style>
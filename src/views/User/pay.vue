<template>
  <div class="container">
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
    <!-- 充值框 -->
    <div class="content-box">
      <div class="content-top clearfix">
        <div class="fl content-top-l">
          充值金额范围：100-10000
        </div>
        <div class="rt content-top-r">
          账户余额：0.0
        </div>
      </div>
      <div class="content-body">
        <div class="input-box">
          <!-- <input type="number" v-model="price" placeholder="请输入充值金额"> -->
          <van-field readonly clickable :value="price" placeholder="请输入充值金额"  @touchstart.native.stop="show = true" />
          
        </div>
        <div class="price-list clearfix">
          <div class="price-box fl" @click="assignment(item)" v-for="(item,i) in priceList" :key="i">{{item.number}}</div>
        </div>
      </div>
    </div>
    <!-- 充值按钮 -->
    <div class="sure-big-btn" @click="sureBtn">充值</div>
    <div class="prompt">提示：近期充值渠道不太稳定，若遇到充值不成功，请多尝试几次或联系客服，给您带来不便，敬请见谅。</div>
    <!-- 购物车 -->
    <van-popup v-model="showShopCar" position="bottom" :style="{width:'100%'}" class="shop-car">

    </van-popup>
    <!-- 数字键盘 -->
    <van-number-keyboard v-model="price" extra-key="." :show="show" safe-area-inset-bottom :maxlength="6" @blur="show = false" />
    
  </div>
</template>

<script>
export default {
  name: "pay",
  data() {
    return {
      activeGame: "",
      activeTab: 1, //1为支付宝支付，2为微信支付
      showShopCar: false, //遮罩层
      price: "", //金额
      priceList: [
        { number: "100", id: 1 },
        { number: "200", id: 2 },
        { number: "500", id: 3 },
        { number: "1000", id: 4 },
        { number: "2000", id: 5 }
      ], //金额筛选的项
      show:false,//控制弹出数字键盘
    };
  },
  mounted() {},
  methods: {
    //选择支付方式
    changePay(num) {
      if (this.activeTab != num) {
        this.activeTab = num;
      }
    },
    //赋值要充值的金额
    assignment(item) {
      this.price = item.number;
    },
    //点击充值按钮
    sureBtn() {
      if (!!this.price) {
        if (parseFloat(this.price) <= 10000) {
        } else {
          // this.$toast("输入金额不能大于10000");
          this.$toast({
            duration: 1000,  
            forbidClick: true, // 禁用背景点击
            message:'输入金额不能大于10000'
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/color.scss";
.container {
  height: 100%;
  overflow-y: auto;
  padding: 0 40px;
  .pay-type {
    padding-top: 38px;
    .img-box {
      width: 331px;
      height: 113px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px 3px 5px 3px;
      float: left;
      position: relative;
      i {
        background: url("../../assets/greensaojiao.png") no-repeat;
        background-size: 70px 48px;
        display: none;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70px;
        height: 48px;
      }
    }
    .zfb-img {
      margin-right: 10px;
      background-color: #479ee3;
      img {
        height: 48px;
      }
    }
    .wx-img {
      background-color: #5ecc3e;
      img {
        height: 48px;
      }
    }
    .active {
      i {
        display: block;
      }
    }
  }
  .content-box {
    margin-top: 130px;
    .content-top {
      width: 100%;
      .content-top-l {
        color: #8a8791;
        font-size: 25px;
      }
      .content-top-r {
        color: #fff;
        font-size: 25px;
      }
    }
    .content-body {
      margin-top: 30px;
      .input-box {
        width: 100%;
        background-color: #35333b;
        border-radius: 3px;
        input {
          padding-left: 28px;
          font-size: 29px;
          color: #fff;
          height: 93px;
        }
      }
      .price-list {
        margin-top: 40px;
        .price-box {
          width: 130px;
          height: 80px;
          background-color: #35333b;
          border-radius: 3px;
          margin-right: 5px;
          line-height: 80px;
          text-align: center;
          font-size: 27px;
          color: #fff;
        }
        .price-box:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .shop-car {
    min-height: 90px;
    background: $dark;
  }
  .prompt {
    color: #8a8791;
    font-size: 20px;
    margin-top: 28px;
    line-height: 32px;
  }
}
</style>

<style lang="css" scoped>

.games >>> .van-tab {
  flex-basis: 106px !important;
  /* text-align: left !important; */
}
</style>
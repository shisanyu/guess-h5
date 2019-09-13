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
          <van-field readonly clickable :value="price" placeholder="请输入充值金额" @touchstart.native.stop="show = true" />

        </div>
        <div class="price-list clearfix">
          <div class="price-box fl" @click="assignment(item)" v-for="(item,i) in priceList" :key="i">{{item.number}}</div>
        </div>
      </div>
    </div>
    <!-- 充值按钮 -->
    <div class="sure-big-btn" @click="sureBtn">充值</div>
    <div class="prompt">提示：近期充值渠道不太稳定，若遇到充值不成功，请多尝试几次或联系客服，给您带来不便，敬请见谅。</div>
    <!-- 支付确认弹框 -->
    <van-overlay :show="showShopCar" @click="clearModel" />
    <div class="model-box" v-if="showShopCar">
      <div class="title-box">支付</div>
      <p v-if="isFinish">你的支付请求已提交</p>
      <div class="close-btn" @click="clearModel">×</div>
      <div class="model-text between">
        <div class="model-label">充值方式：</div>
        <div class="model-label" v-if='activeTab'>支付宝</div>
        <div class="model-label" v-else>微信</div>
      </div>
      <div class="model-text between">
        <div class="model-label">充值金额：</div>
        <div class="model-label model-price">{{price}}</div>
      </div>
      
      <div class="btn-box between" v-if="isFinish">
        <div class="btn sure-big-btn" @click="successBtn">支付完成</div>
        <div class="btn sure-big-btn matter-btn">支付遇到问题</div>
      </div>
      <div class="sure-big-btn" v-else @click="submit">确认支付</div>
    </div>
    <!-- 数字键盘 -->
    <van-number-keyboard v-model="price" extra-key="." :show="show" safe-area-inset-bottom :maxlength="10" @blur="show = false" />

  </div>
</template>

<script>
export default {
  name: "pay",
  data() {
    return {
      activeGame: "",
      activeTab: 1, //1为支付宝支付，2为微信支付
      showShopCar: true, //遮罩层
      price: "200", //金额
      priceList: [
        { number: "100", id: 1 },
        { number: "200", id: 2 },
        { number: "500", id: 3 },
        { number: "1000", id: 4 },
        { number: "2000", id: 5 }
      ], //金额筛选的项
      show: false, //控制弹出数字键盘
      isFinish:false,//判断是否完成
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
    //关闭充值弹框
    clearModel(){
      this.showShopCar=false;
      this.isFinish=false;
    },
    //点击充值按钮
    sureBtn() {
      if (!!this.price) {
        if (parseFloat(this.price) <= 10000) {
          this.showShopCar=true;
        } else {
          // this.$toast("输入金额不能大于10000");
          this.$toast({
            duration: 1000,
            forbidClick: true, // 禁用背景点击
            message: "输入金额不能大于10000"
          });
        }
      }
    },
    //点击确认支付
    submit(){
      this.isFinish=true;
    },
    //点击支付完成按钮
    successBtn(){
      this.$router.replace({path:'/layout/home'})
    },
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
        color: $gray;
        font-size: 25px;
      }
      .content-top-r {
        color: $gray;
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
          color: $gray;
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
          color: $gray;
        }
        .price-box:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .shop-car {
    height: 100vh;
    background: $opacity-dark;
    padding: 0 40px;
    
  }
  .model-box {
    position: fixed;
    width: 89.33333%;
    min-height: 387px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #252426;
    border-radius: 5px;
    padding: 40px;
    z-index: 20;
    .title-box {
      color: $gray;
      font-size: 29px;
      text-align: center;
      margin-bottom: 40px;
    }
    p{
      color: $gray;
      font-size: 24px;
      text-align: center;
      margin-bottom: 40px;
    }
    .close-btn {
      position: absolute;
      top:26px;
      right: 34px;
      display: block; 
      color: #ffc444;
      font-size: 50px;
      font-weight: 300;
    }
    .model-text{

      margin-bottom: 45px;
      .model-label{
        font-size: 24px;
        color: $gray;
      }
      .model-price{
        color: #ffc444;
      }
    }
    .sure-big-btn{
      margin-top: 60px;
    }
    .btn-box{
      .btn{
        border: solid 2px #ffc444;
        width: 49%;
        line-height: 76px;
        margin-top: 15px;
      }
      .sure-btn{

      }
      .matter-btn{
        background-color: transparent;
        color: $gray;
      }
    } 
  }
  .prompt {
    color: $gray;
    font-size: 20px;
    margin-top: 28px;
    line-height: 32px;
  }
}
</style>

<style lang="css" scoped>
.container >>> .van-overlay{
  z-index: 10;
}
</style>
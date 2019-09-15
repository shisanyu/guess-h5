<template>
  <div class="container">
    <div class="list-box">
      <div class="label-text">修改手机：</div>
      <div class="label-content">
        <input type="number" v-model="userName" placeholder="请输入手机号" />
      </div>
    </div>
    <div class="list-box">
      <div class="label-text">验证码：</div>
      <div class="label-content label-content-code">
        <input type="text" v-model="bankCard" placeholder="请输入验证码" />
        <span class="send-code" @click="sendCode">发送验证码</span>
      </div>
    </div>

    <div class="sure-big-btn" @click="submit">确认绑定</div>
  </div>
</template>

<script>
export default {
  name: "BankcardInfo",
  data() {
    return {
      userName: "", //开户名称
      bankCard: "" //银行卡号
    };
  },
  created() {
    this.$store.commit("setPageTitle", "绑定手机");
  },
  mounted() {},
  methods: {
    //点击确认
    submit() {},
    // 发送验证码
    sendCode() {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/color.scss";
a {
  display: block;
}
.container {
  padding: 0 40px;
  .list-box {
    // height: 100px;
    display: flex;
    border-bottom: 1px solid $border-color;
    align-items: center;
    .label-text,
    .label-content {
      color: $gray;
      font-size: 27px;
      height: 100px;
      line-height: 100px;
    }
    .label-text {
      width: 200px;
      float: left;
    }
    .label-content {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      input {
        width: 100%;
        font-size: 27px;
      }
      .gray-text,
      .check-text {
        font-size: 27px;
        color: #777;
      }
      .check-text {
        color: $gray;
      }
      &.label-content-code {
        display: flex;
        align-items: center;
        input{
          flex:1;
        }
        .send-code {
          font-size: 24px;
          border-radius: 10px;
          border:1px solid $yellow;
          color: $yellow;
          height: 60px;
          line-height: 56px;
          width: 160px;
          text-align: center;
        }
      }
    }
  }
  .sure-big-btn {
    margin-top: 247px;
  }
}
</style>

<style lang="css" scoped>
.van-password-input >>> .van-password-input__security li {
  height: 70px;
}
</style>
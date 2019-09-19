<template>
  <div class="container">
    <div class="list-box">
      <div class="label-text">旧密码：</div>
      <div class="label-content">
        <input type="number" v-model="oldPwd" placeholder="请输入旧密码" />
      </div>
    </div>
    <div class="list-box">
      <div class="label-text">新密码：</div>
      <div class="label-content">
        <input type="number" v-model="newPwd" placeholder="6-12位字母或数字" />
      </div>
    </div>
    <div class="list-box">
      <div class="label-text">新密码：</div>
      <div class="label-content">
        <input type="number" v-model="confirmPwd" placeholder="请再一次输入您的新密码" />
      </div>
    </div>

    <div class="sure-big-btn" @click="submit">确认修改</div>
  </div>
</template>

<script>
export default {
  name: "BankcardInfo",
  data() {
    return {
      oldPwd: "", //旧密码
      newPwd: "" ,//新密码
      confirmPwd:'',//确认密码
    };
  },
  created() {
    this.$store.commit("setPageTitle", "修改密码");
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
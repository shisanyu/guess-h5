<template>
  <div class="container">
    <div class="list-box">
      <div class="label-text">旧密码：</div>
      <div class="label-content pwd-box">
        <!-- 密码输入框 -->
        <van-password-input :value="password" :length="6" :gutter="10" :focused="showKeyboard" @focus="showKeyboard = true" />
      </div>
    </div>
    <div class="list-box">
      <div class="label-text">新密码：</div>
      <div class="label-content pwd-box">
        <!-- 密码输入框 -->
        <van-password-input :value="password" :length="6" :gutter="10" :focused="showKeyboard" @focus="showKeyboard = true" />
      </div>
    </div>
    <div class="list-box">
      <div class="label-text">确认密码：</div>
      <div class="label-content pwd-box">
        <!-- 密码输入框 -->
        <van-password-input :value="password" :length="6" :gutter="10" :focused="showKeyboard" @focus="showKeyboard = true" />
      </div>
    </div>

    <div class="sure-big-btn" @click="submit">确认绑定</div>
    <!-- 支付键盘 -->
    <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
  </div>
</template>

<script>
export default {
  name: "BankcardInfo",
  data() {
    return {
      userName: "", //开户名称
      bankCard: "", //银行卡号
      password: '',
      showKeyboard: false //控制支付密码键盘
    };
  },
  created() {
    this.$store.commit("setPageTitle", "修改支付密码");
  },
  mounted() {},
  methods: {
    //点击确认
    submit() {},
    //点击输入支付密码
    onInput(key) {
      this.password = (this.password + key).slice(0, 6);
    },
    //点击删除支付密码
    onDelete() {
      this.password = this.password.slice(0, this.password.length - 1);
    }
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
      display: flex;
      align-items: center;
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
      &.pwd-box {
        margin-top: 30px;
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
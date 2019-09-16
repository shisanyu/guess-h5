<template>
  <div class="container login">
    <div class="logo">
      <img src="../../assets/login-logo.png" alt="">
    </div>
    <!-- 注册 -->
    <div class="register login-main" v-if="isRegister">
      <p class="title">注册</p>
      <div class="input-box">
        <img src="../../assets/login-user.png" class="label" alt="">
        <input type="text" v-model="signIn.userName" placeholder="用户名（4-12位小写字母或数字）" maxlength="12" minlength="4" :change="onInputChange('userName')"/>
      </div>
      <div class="input-box">
        <img src="../../assets/login-pwd.png" class="label" alt="">
        <input type="text" v-model="signIn.password" placeholder="密码（6-12位小写字母或数字）" maxlength="12" minlength="6" />
      </div>
      <div class="input-box">
        <img src="../../assets/login-pwd.png" class="label" alt="">
        <input type="text" v-model="signIn.rePassword" placeholder="用户名（4-12位小写字母或数字）" maxlength="12" minlength="6" />
      </div>
      <div class="input-box">
        <img src="../../assets/login-invite.png" class="label" alt="">
        <input type="text" v-model="signIn.code" placeholder="推荐码（非必填）" />
      </div>
      <div class="btn" @click="registerFun">注册</div>
      <p class="back" @click="isRegister=false;">返回登录</p>
    </div>
    <!-- 登录 -->
    <div class="sign-in login-main" v-else>
      <p class="title">登录</p>
      <div class="input-box">
        <img src="../../assets/login-user.png" class="label" alt="">
        <input type="text" v-model="signIn.userName" placeholder="请输入用户名" maxlength="12" minlength="4" />
      </div>
      <div class="input-box">
        <img src="../../assets/login-pwd.png" class="label" alt="">
        <input type="text" v-model="signIn.password" placeholder="请输入密码" maxlength="12" minlength="6" />
      </div>
      <div class="other">
        <span @click="isRegister=true;">账号注册</span>
        <span>忘记密码</span>
      </div>
      <div class="btn">登录</div>
      <router-link to="/layout/home" class="back">我先逛逛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signIn: {
        userName: 'leo12346',
        password: '123456',
        rePassword: '123465',
        code: ''
      },
      login:{

      },
      isRegister:true, // 是否注册
    }
  },
  methods:{
    // 限制输入英文 数字
    onInputChange(key){
      this.signIn[key] = this.signIn[key].replace(/[^\a-\z\A-\Z0-9]/g, '');
    },
    // 注册
    registerFun(){
      this.$http.post('account/register').then(res=>{
        console.log(res);
        
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background: #000 url(~@/assets/login-bg.png) no-repeat;
  background-size: contain;
  position: relative;
  padding-top: 160px;
  .logo {
    text-align: center;
    margin-bottom: 100px;
    img {
      width: 365px;
    }
  }
  .login-main {
    width: 633px;
    background-color: #19181a;
    border-radius: 5px;
    margin: 0 auto;
    padding: 50px 40px;
    text-align: center;
    .title {
      font-size: 33px;
      color: #fff;
      margin-bottom: 60px;
    }
    .input-box {
      background-color: #36333c;
      height: 80px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 0 24px;
      margin-bottom: 24px;
      .label {
        width: 32px;
        margin-right: 24px;
      }
      input {
        line-height: 48px;
        flex: 1;
        font-size: 24px;
        color: #fff;
      }
    }
    .btn {
      margin-top: 60px;
      height: 80px;
      background-color: #ffc102;
      border-radius: 5px;
      line-height: 80px;
      color: #000000;
      font-size: 29px;
      text-align: center;
    }
    .back {
      color: #d8d4df;
      font-size: 24px;
      margin-top: 30px;
      display: block;
    }
    .other {
      text-align: left;
      margin-top: 40px;
      span {
        color: #d7d4de;
        font-size: 24px;
        &:last-child {
          float: right;
        }
      }
    }
  }
}
</style>
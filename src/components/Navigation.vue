<template>
  <div class="navigation" id="navigation">
    <div class="nav home" v-if="this.$router.history.current.name=='home'">
      <div class="home-l"><img src="../assets/logo.png" alt=""></div>
      <div class="home-r" @click="showUserMenu=true;"><img src="../assets/user.png" alt=""></div>
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

    <van-popup class="user-menu" v-model="showUserMenu" position="right" :style="{ width: '50%',height: '100%'}">
      <div class="header">
        <img src="../assets/ig.png" alt="">
        <p class="name">Mr.HAP</p>
        <div class="header-main">
          <div class="item">
            <label>余额</label>
            <p>0.0</p>
          </div>
          <div class="item">
            <label>可提</label>
            <p>0.0</p>
          </div>
          <div class="item">
            <label>奖金</label>
            <p>0.0</p>
          </div>
        </div>
      </div>
      <div class="menu-list">
        <router-link to="/layout/home" class="link">充值</router-link>
        <router-link to="/layout/home" class="link">提现</router-link>
        <router-link to="/layout/home" class="link">投注历史</router-link>
        <router-link to="/layout/home" class="link">财务流水</router-link>
        <router-link to="/layout/home" class="link">账号安全</router-link>
        <router-link to="/layout/home" class="link">系统消息</router-link>
        <router-link to="/layout/home" class="link">联系客服</router-link>
      </div>
      <div class="logout" @click="logout">退出登录</div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showUserMenu: false
    }
  },
  created() {

  },
  methods:{
    logout(){
      this.$router.replace('/login');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/color.scss";
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

  .user-menu {
    background-color: #252426;
    .header {
      text-align: center;
      padding-top: 45px;
      img {
        width: 145px;
        height: 145px;
        background-color: #7b757f;
        border: solid 2px $yellow;
        border-radius: 50%;
      }
      .name {
        font-size: 26px;
        color: #d7d4de;
        margin: 22px 0 40px;
        text-align: center;
      }
      .header-main {
        display: flex;
        padding: 0 10px;
        .item {
          flex: 1;
          position: relative;
          text-align: center;
          label {
            font-size: 27px;
            color: $gray;
          }
          p {
            font-size: 24px;
            color: $gray;
            margin-top: 10px;
          }
          &:not(:first-child)::after {
            content: "";
            position: absolute;
            left: 0;
            top: 20px;
            height: 28px;
            border-left: 3px solid $gray;
          }
        }
      }
    }
    .menu-list {
      margin-top: 30px;
      .link {
        display: block;
        height: 100px;
        line-height: 100px;
        font-size: 24px;
        color: $gray;
        padding-left: 60px;
      }
    }
    .logout{
      position: fixed;
      bottom: 66px;
      width: 100%;
      color: #89868f;
      font-size: 24px;
      text-align: right;
      padding-right: 68px;
    }
  }
}
</style>
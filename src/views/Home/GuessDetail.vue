<template>
  <div class="container guess-detail">
    <header class="header">
      <p class="title">
        <img src="../../assets/game.png" alt />
        <span>LOL-TCL LPL/BO1</span>
      </p>
      <div class="header-main">
        <div class="header-l header-team">
          <div>
            <img src="../../assets/ig.png" alt />
            <p>IG</p>
          </div>
        </div>
        <div class="header-center">
          <div>
            <p>
              <span>2</span>
              <i></i>
              <span>0</span>
            </p>
            <a href class="video">
              <img src="../../assets/video.png" alt />
            </a>
          </div>
        </div>
        <div class="header-r header-team">
          <div>
            <img src="../../assets/ig.png" alt />
            <p>IG</p>
          </div>
        </div>
      </div>
    </header>

    <van-tabs class="tabs" v-model="activeTab" :border="false">
      <van-tab v-for="index in 8" :name="index" :title="'标签 ' + index"></van-tab>
    </van-tabs>

    <div class="table-box">
      <div class="tables" :class="list.length>3?'my-table-over':''">
        <div class="my-table">
          <ul class="title-ul clearfix">
            <li class="tit">全场</li>
            <li v-for="item in list">RW</li>
          </ul>
          <ul class="list-ul clearfix">
            <li class="tit">获得比赛胜利</li>
            <li v-for="item in list" class="win">1.62</li>
          </ul>
        </div>
        <div class="over-jt" v-if="list.length>3">
          <img src="../../assets/icon-sjx.png" alt />
        </div>
      </div>
    </div>

    <guess-car :showPopup="showPopup" @popupClose="showPopup=false;"></guess-car>
  </div>
</template>

<script>
import GuessCar from "@/components/GuessCar.vue";
export default {
  data() {
    return {
      showPopup: false,
      activeTab: 0,
      list: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  components: { GuessCar },
  created(){
    this.$store.commit("setPageTitle","竞猜");
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/color.scss";
.container {
  .header {
    height: 340px;
    background: #19181a;
    padding: 36px 52px 0;
    color: $gray;
    .title {
      display: flex;
      align-items: center;
      height: 36px;
      img {
        height: 36px;
        margin-right: 20px;
      }
      span {
        font-size: 20px;
      }
    }
    .header-main {
      display: flex;
      width: 100%;
      .header-team {
        flex: 1;
        justify-content: center;
        align-items: center;
        height: 260px;
        display: flex;
        img {
          height: 90px;
        }
        p {
          font-size: 24px;
          margin-top: 16px;
          text-align: center;
        }
      }
      .header-center {
        height: 260px;
        width: 200px;
        justify-content: center;
        align-items: center;
        display: flex;
        span {
          font-size: 40px;
          text-align: center;
          display: inline-block;
          width: 80px;
          vertical-align: middle;
        }
        i {
          display: inline-block;
          width: 14px;
          height: 4px;
          background: $gray;
          vertical-align: middle;
        }
        .video {
          display: block;
          margin-top: 30px;
          text-align: center;
          img {
            width: 74px;
          }
        }
      }
    }
  }
  .table-box {
    .tables {
      .my-table {
        ul {
          display: flex;
          li {
            flex: 1;
            height: 108px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 1px solid $black;
            border-bottom: 1px solid $black;
            background: $deep-yellow;
            font-size: 24px;
            color: $gray;
            &.win{
              position: relative;
            }
            &.win::after{
              content: '';
              width: 50px;
              height: 16px;
              position: absolute;
              background: url(~@/assets/win.png) no-repeat;
              background-size: 100% 100%;
              transform: translateX(60px)
            }
          }
        }
        .title-ul {
          li {
            height: 84px;
            color: $black;
            background: $yellow;
          }
        }
        .tit {
          flex: 0 0 244px !important;
        }
      }
      &.my-table-over {
        position: relative;
        .my-table {
          overflow-x: auto;
          margin-right: 40px;
          ul {
            display: block;
            white-space: nowrap;
            overflow-x: initial;
            li {
              display: inline-flex;
              width: 176px;
            }
            .tit {
              width: 244px;
              flex: 0 0 244px !important;
            }
          }
        }
        .over-jt {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 40px;
          background: $yellow;
          display: flex;
          align-items: center;
          justify-content: center;
          border-left: 1px solid $black;
          img {
            width: 14px;
          }
        }
      }
    }
  }
}
</style>
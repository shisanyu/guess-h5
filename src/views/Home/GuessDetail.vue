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
      <table class="table">
        <thead>
          <tr>
            <th class="table-title">全场</th>
            <th>RW</th>
            <th>IG</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in 2">
            <td class="table-title">获得比赛胜利</td>
            <td>1.62</td>
            <td>2.17</td>
          </tr>
        </tbody>
      </table>
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
      activeTab: 0
    };
  },
  components: { GuessCar }
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
    table {
      width: 100%;
      thead {
        tr {
          background: $yellow;
          th{
            font-size: 24px;
            height: 84px;
            line-height: 84px;
            color: $black;
            border-left: 1px solid $black;
          }
        }
      }
      tbody{
        tr{
          background: $deep-yellow;
          td{
            height: 108px;
            border-top: 1px solid $black;
            border-left: 1px solid $black;
            font-size: 24px;
            line-height: 108px;
            text-align: center;
          }
        }
      }
      .table-title{
        width: 244px;
      }
    }
  }
}
</style>
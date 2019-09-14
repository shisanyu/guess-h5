<template>
  <div class="container">
    <van-tabs v-model="active" :border="false">
      <van-tab title="全部"></van-tab>
      <van-tab title="充值"></van-tab>
      <van-tab title="投注"></van-tab>
      <van-tab title="提现"></van-tab>
      <van-tab title="结算"></van-tab>
      <van-tab title="其他"></van-tab>
    </van-tabs>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <div class="list-box">
        <div class="list between" v-for="(item,i) in listData" :key="i">
          <div class="list-l">提现</div>
          <div class="list-c">2019/04/04 13:24</div>
          <div class="list-r">+400</div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "stream",
  data() {
    return {
      active: 1,
      loading:false,//加载中
      finished:false,//没有更多数据
      listData: [],
    };
  },
  created() {
    this.$store.commit("setPageTitle", "银行卡");
  },
  mounted() {},
  methods: {
    //获取数据
    getList(){
      // setTimeout(()=>{
      //   this.listData = this.listData.concat([{}, {}, {}, {}]);
      //   this.loading = false;
      // },500)
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
  .list-box {
    padding: 0 40px;
    .list {
      height: 110px;
      align-items: center;
      border-bottom: 1px solid $border-color;
      .list-c {
        font-size: 21px;
      }
    }
    .list > div {
      color: $gray;
      font-size: 27px;
    }
  }
}
</style>

<style lang="css" scoped>
.van-tabs >>> .van-tabs__wrap--scrollable .van-tab {
  flex: 0 0 16.66% !important;
  flex-basis: 16.66% !important;
}
</style>
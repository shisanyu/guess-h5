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
  </div>
</template>

<script>
export default {
  name: "stream",
  data() {
    return {
      active:1,
    };
  },
  created(){
    this.$store.commit("setPageTitle","银行卡");
  },
  mounted() {},
  methods: {
    //跳转编辑页面
    edit(){
      this.$router.push({path:'/layout/BankcardEdit',query:{id:'2'}})
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/color.scss";
a {
  display: block;
}
.container {
  
}
</style>

<style lang="css" scoped>
.van-tabs >>> .van-tabs__wrap--scrollable .van-tab{
  flex: 0 0 16.66% !important;
  flex-basis: 16.66% !important;
}
</style>
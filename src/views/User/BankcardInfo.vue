<template>
  <div class="container">
      <div class="list-box">
        <div class="label-text">开户名称</div>
        <div class="label-content">王晓明</div>
      </div>
      <div class="list-box">
        <div class="label-text">银行卡号</div>
        <div class="label-content">123123123123123213</div>
      </div>
      <div class="list-box">
        <div class="label-text">开户省份</div>
        <div class="label-content">浙江</div>
      </div>
      <div class="list-box">
        <div class="label-text">开户城市</div>
        <div class="label-content">温州</div>
      </div>
      <div class="list-box">
        <div class="label-text">开户银行</div>
        <div class="label-content">工商银行</div>
      </div>
      <div class="list-box">
        <div class="label-text">开户支行</div>
        <div class="label-content">撒大声地支行</div>
      </div>
      <div class="sure-big-btn" @click="edit">编辑</div>
  </div>
</template>

<script>
export default {
  name: "BankcardInfo",
  data() {
    return {

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
  padding: 0 40px;
  .list-box{
    height: 100px;
    display: flex;
    border-bottom: 1px solid $border-color;
    align-items: center;
    .label-text,.label-content{
      color: $gray;
      font-size: 27px;
    }
    .label-text{
      width: 200px;
    }
    .label-content{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .sure-big-btn{
    margin-top: 247px;
  }
}
</style>

<style lang="css" scoped>
</style>
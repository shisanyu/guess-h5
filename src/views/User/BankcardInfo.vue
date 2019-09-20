<template>
  <div class="container" v-if="bankInfo">
      <div class="list-box" >
        <div class="label-text">开户名称</div>
        <div class="label-content">{{bankInfo.bankUserName}}</div>
      </div>
      <div class="list-box">
        <div class="label-text">银行卡号</div>
        <div class="label-content">{{bankInfo.bankNo}}</div>
      </div>
      <div class="list-box">
        <div class="label-text">开户省份</div>
        <div class="label-content">{{bankInfo.bankProvince}}</div>
      </div>
      <div class="list-box">
        <div class="label-text">开户城市</div>
        <div class="label-content">{{bankInfo.bankCity}}</div>
      </div>
      <div class="list-box">
        <div class="label-text">开户银行</div>
        <div class="label-content">{{bankInfo.bankName}}</div>
      </div>
      <div class="list-box">
        <div class="label-text">开户支行</div>
        <div class="label-content">{{bankInfo.bankBranch}}</div>
      </div>
      <div class="sure-big-btn" @click="edit">编辑</div>
  </div>
</template>

<script>
export default {
  name: "BankcardInfo",
  data() {
    return {
      bankInfo:null,//银行卡详情
    };
  },
  created(){
    this.$store.commit("setPageTitle","银行卡");
  },
  mounted() {
    this.getBankInfo();
  },
  methods: {
    //跳转编辑页面
    edit(){
      this.$router.push({path:'/layout/BankcardEdit',query:{id:this.bankInfo.id||null}})
    },
    //获取银行卡信息
    getBankInfo() {
      var params={
        token:this.$store.state.token
      }
      this.$http.post("userBank/info", params).then(res => {
        if (res.retCode == 0) {
          if (!!res.data) {
            this.bankInfo = res.data;
          } 
        }
      });
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
    // height: 100px;
    display: flex;
    border-bottom: 1px solid $border-color;
    align-items: center;
    .label-text,.label-content{
      color: $gray;
      font-size: 27px;
      height: 100px;
      line-height: 100px;
    }
    .label-text{
      width: 200px;
    }
    .label-content{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }
  }
  .sure-big-btn{
    margin-top: 247px;
  }
}
</style>

<style lang="css" scoped>
</style>
<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
    <van-cell v-for="item in listData">
      <template slot="title">
        <p class="between">
          <span class="title">通知</span>
          <span>2019/06/03 22:12</span>
        </p>
        <div class="content" :class="item.isShow&&'show'" @click="toggleShow(item)" >内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑内容后台编辑</div>
      </template>
    </van-cell>
  </van-list>
</template>

<script>
export default {
  data() {
    return {
      listData: [{}, {}, {}, {}],
      loading: false,
      finished: false
    };
  },
  created(){
    this.$store.commit("setPageTitle","系统消息");
  },
  methods: {
    getList() {

    },
    // 显示内容详情
    toggleShow(item){
      this.$set(item,'isShow',!item.isShow);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/color.scss";
.van-cell {
  background-color: transparent !important;
  padding-left: 30px;
  padding-right: 30px;
  overflow: hidden;
  span {
    font-size: 22px;
    color: #8a8791;
    &.title {
      font-size: 28px;
      color: #fff;
    }
  }
  .content {
    font-size: 26px;
    color: $gray;
    line-height: 40px;
    margin-top: 12px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &.show {
      height: auto;
      text-overflow: clip;
      white-space: normal;
    }
  }
}
</style>
<style scoped>
.van-cell >>> .van-cell__title {
  display: block;
  flex: none;
  width: 100%;
}
.van-cell::after {
  right: 30px;
  left: 30px;
  border-color: #35333b;
}
</style>
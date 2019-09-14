<template>
  <div class="container">
    <div class="list-box">
      <div class="label-text">开户名称</div>
      <div class="label-content">
        <input type="text" v-model="userName" placeholder="请输入姓名">
      </div>
    </div>
    <div class="list-box">
      <div class="label-text">银行卡号</div>
      <div class="label-content">
        <input type="number" v-model="bankCard" placeholder="请输入银行卡号">
      </div>
    </div>
    <div class="list-box" @click="changeProvince">
      <div class="label-text">开户省份</div>
      <div class="label-content change-content">
        <div class="gray-text">请选择省份</div>
        <!-- <div class="gray-text check-text">浙江</div> -->
        <div class="img-box">
          <img src="../../assets/icon-down.png" alt="">
        </div>
      </div>
    </div>
    <div class="list-box" @click="changeCity">
      <div class="label-text">开户城市</div>
      <div class="label-content change-content">
        <div class="gray-text">请选择城市</div>
        <!-- <div class="gray-text check-text">杭州</div> -->
        <div class="img-box">
          <img src="../../assets/icon-down.png" alt="">
        </div>
      </div>
    </div>
    <div class="list-box" @click="changeBank">
      <div class="label-text">开户银行</div>
      <div class="label-content change-content">
        <div class="gray-text">请选择银行</div>
        <!-- <div class="gray-text check-text">工商银行</div> -->
        <div class="img-box">
          <img src="../../assets/icon-down.png" alt="">
        </div>
      </div>
    </div>
    <div class="list-box">
      <div class="label-text">开户支行</div>
      <div class="label-content">
        <input type="text" v-model="bank" placeholder="请输入支行名称">
      </div>
    </div>
    <div class="sure-big-btn" v-if="!!$route.query.id" @click="edit">确认编辑</div>
    <div class="sure-big-btn" v-else @click="edit">确认绑定</div>
    <!-- 省选择弹框 -->
    <van-popup class="bankcard-model" v-model="model1" position="bottom" :style="{ height: '264px',backgroundColor: '#35333b', }">
      <div class="picker-box">
        <van-picker :columns="columns"  show-toolbar title="选择省" @cancel="onCancelModel1" @confirm="onConfirmModel1" />
      </div>
    </van-popup>
    <!-- 市选择弹框 -->
    <van-popup class="bankcard-model" v-model="model2" position="bottom" :style="{ height: '264px',backgroundColor: '#35333b', }">
      <div class="picker-box">
        <van-picker :columns="columns"  show-toolbar title="选择城市" @cancel="onCancelModel2" @confirm="onConfirmModel2" />
      </div>
    </van-popup>
    <!-- 开户支行选择弹框 -->
    <van-popup class="bankcard-model" v-model="model3" position="bottom" :style="{ height: '264px',backgroundColor: '#35333b', }">
      <div class="picker-box">
        <van-picker :columns="columns"  show-toolbar title="选择开户支行" @cancel="onCancelModel3" @confirm="onConfirmModel3" />
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "BankcardInfo",
  data() {
    return {
      formData: {
        //数据
      },
      userName: "", //开户名称
      bankCard: "", //银行卡号
      province: "", //省
      city: "", //城市
      bank: "", //开户银行
      subbranch: "", //开户支行
      model1:false,//控制省弹框
      model2:false,//控制市弹框
      model3:false,//控制开户行弹框
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
    };
  },
  created() {
    if(!!this.$route.query.id){
      this.$store.commit("setPageTitle", "编辑银行卡");
    }else{
      this.$store.commit("setPageTitle", "绑定银行卡");
    }
    
  },
  mounted() {
  },
  methods: {
    //点击确认编辑
    edit() {},
    //点击省
    changeProvince(){
      this.model1=true;
    },
    //取消省的弹框
    onCancelModel1(){
      this.model1=false;
    },
    //确认省的弹框
    onConfirmModel1(value, index){
      this.model1=false;
    },
    //点击市
    changeCity(){
      this.model2=true;
    },
    //取消省的弹框
    onCancelModel2(){
      this.model2=false;
    },
    //确认省的弹框
    onConfirmModel2(value, index){
      this.model2=false;
    },
    //点击开户银行
    changeBank(){
      this.model3=true;
    },
    //取消省的弹框
    onCancelModel3(){
      this.model3=false;
    },
    //确认省的弹框
    onConfirmModel3(value, index){
      this.model3=false;
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
  .list-box {
    // height: 100px;
    display: flex;
    border-bottom: 1px solid $border-color;
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
    }
    .change-content {
      .gray-text{
        display: inline-block;
      }      
      .img-box {
        float: right;
        width: 25px;
        height: 100px;
        line-height: 100px;
        display: flex;
        align-items: center;
        img {
          width: 25px;
        }
      }
    }
  }
  .sure-big-btn {
    margin-top: 247px;
  }
}
</style>

<style lang="css" scoped>
</style>
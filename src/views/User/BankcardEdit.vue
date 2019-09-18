<template>
  <div class="container">
    <div class="list-box">
      <div class="label-text">开户名称</div>
      <div class="label-content">
        <input type="text" v-model="bankUserName" placeholder="请输入姓名">
      </div>
    </div>
    <div class="list-box">
      <div class="label-text">银行卡号</div>
      <div class="label-content">
        <input type="number" v-model="bankNo" placeholder="请输入银行卡号" >
      </div>
    </div>
    <div class="list-box" @click="changeProvince">
      <div class="label-text">开户省份</div>
      <div class="label-content change-content">
        <div class="gray-text check-text" v-if="!!province">{{province}}</div>
        <div class="gray-text" v-else>请选择省份</div>
        
        <div class="img-box">
          <img src="../../assets/icon-down.png" alt="">
        </div>
      </div>
    </div>
    <div class="list-box" @click="changeCity">
      <div class="label-text">开户城市</div>
      <div class="label-content change-content">
        <div class="gray-text check-text" v-if="!!city">{{city}}</div>
        <div class="gray-text" v-else>请选择城市</div>
        <div class="img-box">
          <img src="../../assets/icon-down.png" alt="">
        </div>
      </div>
    </div>
    <div class="list-box" @click="changeBank">
      <div class="label-text">开户银行</div>
      <div class="label-content change-content">
        <!-- <div class="gray-text">请选择银行</div> -->
        <!-- <div class="gray-text check-text">工商银行</div> -->
        <input type="text" v-model="bankName" placeholder="请输入开户银行">
        <div class="img-box">
          <img src="../../assets/icon-down.png" alt="">
        </div>
      </div>
    </div>
    <div class="list-box">
      <div class="label-text">开户支行</div>
      <div class="label-content">
        <input type="text" v-model="bankBranch" placeholder="请输入支行名称">
      </div>
    </div>
    <div class="sure-big-btn" v-if="!!$route.query.id" @click="edit">确认编辑</div>
    <div class="sure-big-btn" v-else @click="edit">确认绑定</div>
    <!-- 省选择弹框 -->
    <van-popup class="bankcard-model" v-model="model1" position="bottom" :style="{ height: '264px',backgroundColor: '#35333b', }">
      <div class="picker-box">
        <van-picker :columns="provinceList" value-key="name" :default-index="provinceIndex"  show-toolbar title="选择省" @cancel="onCancelModel1" @confirm="onConfirmModel1" />
      </div>
    </van-popup>
    <!-- 市选择弹框 -->
    <van-popup class="bankcard-model" v-model="model2" position="bottom" :style="{ height: '264px',backgroundColor: '#35333b', }">
      <div class="picker-box">
        <van-picker :columns="cityList" value-key="name" :default-index="cityIndex"  show-toolbar title="选择城市" @cancel="onCancelModel2" @confirm="onConfirmModel2" />
      </div>
    </van-popup>
    <!-- 开户支行选择弹框 -->
    <!-- <van-popup class="bankcard-model" v-model="model3" position="bottom" :style="{ height: '264px',backgroundColor: '#35333b', }">
      <div class="picker-box">
        <van-picker :columns="columns"  show-toolbar title="选择开户支行" @cancel="onCancelModel3" @confirm="onConfirmModel3" />
      </div>
    </van-popup> -->
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
      bankUserName: "", //开户名称
      bankNo: "", //银行卡号
      province: "", //省
      city: "", //城市
      bankName: "", //开户银行
      provinceId: null, //省id
      cityId: null, //城市id
      bankId: null, //开户银行id
      bankBranch: "", //开户支行
      model1:false,//控制省弹框
      model2:false,//控制市弹框
      model3:false,//控制开户行弹框
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      provinceList:[],//省列表
      cityList:[],//市列表
      bankList:[],//开户银行列表
      provinceIndex:0,//默认省选中的值
      cityIndex:0,//默认市选中的值
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
    // 限制输入英文 数字
    onInputChange(key) {
      // this.key = this.key.replace(/[^\a-\z\A-\Z0-9]/g, "");
    },
    //获取省数据
    getProvince(){
      this.getArea(1,1);
    },
    //获取市数据
    getCity(){
      // this.getArea(this.provinceId,2);
    },
    //获取省、市地区数据
    getArea(parentId,type){//type为1：省，为2：市
      this.columns=[];
      var params={
        parentId:parentId
      }
      this.$http.post("area/list", params).then(res => {
        if (res.retCode == 0) {
          if(type==1){//省数据
            this.provinceList=res.data
            
            // res.data.map((val)=>{
            //   var obj={};
            //   obj.parentId=val.parentId;
            //   obj.text=val.name;
            //   this.columns.push(obj)
            // })
          }else if(type==2){//市数据
            this.cityList=res.data
            console.log(this.cityList,res.data)
          }
        }
      });
    },
    //点击确认编辑，绑定
    edit() {
        
      let params={
        token:this.$store.state.token,
        bankUserName:this.bankUserName,//开户名称
        bankNo:this.bankNo,//账户卡号
        bankName:this.bankName,//开户银行
        bankProvince:this.province,//省
        bankCity:this.city,//市
        bankBranch:this.bankBranch,//开户支行
      }
      this.$http.post("orderInfo/recharge",params ).then(res => {
        if (res.retCode == 0) {
         this.codeUrl=res.data;
         this.showShopCar = false;
         this.isFinish = false;
         this.showCode = true;
        } 
      });
    },
    //点击省
    changeProvince(){
      this.getProvince();
      console.log(this.provinceIndex)
      this.model1=true;
    },
    //取消省的弹框
    onCancelModel1(){
      this.model1=false;
    },
    //确认省的弹框
    onConfirmModel1(value, index){      
      this.provinceIndex=index;
      this.cityList=[];
      this.city='';
      this.cityIndex=-1;
      this.province=value.name;
      this.getArea(value.id,2);
      this.model1=false;
    },
    //点击市
    changeCity(){
      this.model2=true;
    },
    //取消市的弹框
    onCancelModel2(){
      this.model2=false;
    },
    //确认市的弹框
    onConfirmModel2(value, index){
      this.cityIndex=index;
      this.city=value.name;
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
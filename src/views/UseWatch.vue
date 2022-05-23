<template>
  <div>
    <span>名：</span>
    <span>
      <input type="text" v-model='firstName'>
    </span>
    <span>姓：</span>
    <span>
      <input type="text" v-model='lastName'>
    </span>
    <h6>{{ fullName }}</h6>
    <div>
			<span>用户名：</span>
			<span>
				<input type="text" v-model.lazy="uname">
			</span>
			<span>{{ tip }}</span>
		</div>
  </div>
</template>

<script>
// 侦听器 监听数据变化    
// 应用 数据变化时执行异步或开销较大的操作  watch 适用
/*
		1.采用侦听器监听用户名变化
		2.调用后台接口验证
		3.根据验证结果调整提示信息
	 */
export default {
  data() {
    return {
      firstName: 'aaa',
      lastName: 'bbb',
      fullName: '',
      uname:'',
			tip:''
    };
  },
  methods: {
    checkName(uname) {
      //调用接口，可以使用定时任务的方式模拟接口调用
      var that = this;
      setTimeout(function(){
        if(uname == 'admin'){
          that.tip = '用户名已存在，请更换';
        }else{
          that.tip = '可以使用';
        }
      },2000);
    }
  },
  watch: {
    //和属性名保持一致  val最新值
    firstName: function(val) {
      this.fullName = val + '' + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + '' + val;
    },
    uname: function(val){
      //调用后台接口验证用户名合法性
      this.checkName(val);
      this.tip = '正在验证';
    }
  }
}
</script>
<template>
  <div>
    <a v-bind:href="url">百度</a>
		<!-- <a :href="url">百度</a> 相同性质 -->
		<button v-on:click='handle'>切换</button>
	<!-- 起名不能和关键字重复 -->
		<input type="text" v-bind:value='msg' v-on:input='chan'>
		<input type="text" v-bind:value='msg' v-on:input='msg=$event.target.value'>
		<input type="text" v-model='msg' name="">
		<div>{{ msg }}</div>
    <div>
      用户名：<input type="text" v-on:keyup.delete='clearContent' name="" v-model='uname'/>
    </div>
    <div>
      <!-- 回车处理 -->
      密码：<input type="text" v-on:keyup.enter='handleSubmit' name="" v-model='pwd'>
    </div>
    <div>
      <input type="button" v-on:click="handleSubmit" value="提交">
    </div>
    <input type="text" v-model.number="age">
		<input type="text" v-model.trim="info">
		<input type="text" v-model.lazy='msg'>
		<!-- 失去焦点时触发   即全部输入完成 更换焦点 全部显示 -->
		<!-- 转化为数字    去掉空格保留中间的-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:'http://www.baidu.com',
      msg: 'hello',
      uname: '',
      pwd: '',
      age:'',
			info:'',
    };
  },
  methods:{
    handle:function(){
      //修改url
      this.url = 'http://www.taobao.com';
    },
    chan(event) {
      //event.target  元素本身
      this.msg = event.target.value;
    },
    handleSubmit() {
      console.log(this.uname,this.pwd);//提交后台
    },
    clearContent() {
      //按下delete键 全部清空
      this.uname = '';
    }
  }
}
</script>
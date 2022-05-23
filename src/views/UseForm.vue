<template>
  <div>
		<form action="">
			<div>
				<span>姓名：</span>
				<span>
					<input type="text" v-model='uname'>
				</span>
			</div>
			<div>
				<span>性别：</span>
				<span>
					<input type="radio" id="男" value="1" v-model='gender'>
					<label for="male">男</label>
					<input type="radio" id="女" value="2" v-model='gender'>
					<label for="female">女</label>
				</span>
			</div>
			<div>
				<span>爱好：</span>
				<input type="checkbox" id="ball1" value="1" v-model='hobby'>
				<label for="">篮球</label>
				<input type="checkbox" id="ball2" value="2" v-model='hobby'>
				<label for="">足球</label>
				<input type="checkbox" id="ball3" value="3" v-model='hobby'>
				<label for="">排球</label>
			</div>
			<div>
				<span>职业：</span>
				<select name="" id="" v-model="occupation" multiple="true">
					<!-- 绑定多个值 或mutiple-->
					<option value="1">选择职业。。。</option>
					<option value="2">教师</option>
					<option value="3">律师</option>
					<option value="4">医生</option>
				</select>
			</div>
			<div>
				<span>个人简历：</span>
				<textarea v-model="description" name="" id="" cols="30" rows="10"></textarea>
			</div>
			<div>
				<input type="submit" value="提交" @click.prevent="handle">
			</div>
		</form>
	</div>
</template>

<script>
export default {
  data() {
    return {
      uname: '李四',
      gender: 1,
      hobby: ['2','3'],
      occupation: [],
      // 单选 一个值 多选 数组
      description: 'hello'
    };
  },
  methods:{
    handle: function(){
      console.log(this.uname);
      console.log(this.hobby);
      console.log(this.occupation);
      console.log(this.description);
    }
  }
}
</script>
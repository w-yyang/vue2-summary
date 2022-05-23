<template>
  <div>
    <div v-if='score>=90'>优秀</div>
		<div v-else-if='score < 90 && score >= 80'>良好</div>
		<div v-else>较差</div>
		<div v-show='flag'>测试v-show</div>
		<!-- 相当于display 是否显示 控制元素样式 -->
		<button v-on:click='handle'>点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 99,
      flag: false
    };
  },
  methods:{
    handle: function(){
      this.flag = !this.flag;
    }
  }
}
</script>
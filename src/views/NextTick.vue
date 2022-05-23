<template>
  <div>
    <button v-if="isShowInput == false" @click='showInput'>展示文本框</button>
		<input type="text" v-else ref='inp'/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowInput: false
    }
  },
  methods: {
    showInput(){
      this.isShowInput = true;
      // this.$refs.inp.focus();
      //dom元素耗时 此时元素还未加载报错 需要将dom操作延时
      this.$nextTick(() => {
        //当页面渲染完成后再调用
        this.$refs.inp.focus();
      });
    }
  }
}
</script>